/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals and sends data for analysis
 */

export interface WebVitalsMetrics {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
  navigationType: string;
}

const vitalsUrl = "https://www.google-analytics.com/collect";

export function sendToAnalytics(metric: WebVitalsMetrics): void {
  // Only send analytics in production
  if (!import.meta.env.PROD || !navigator.sendBeacon) return;

  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
  if (!trackingId) return;

  const body = {
    t: "event",
    ec: "web_vitals",
    ea: metric.name,
    ev: Math.round(metric.value),
    cx: metric.rating,
    tid: trackingId,
  };

  // Only send events on page unload or periodically
  if (metric.name === "CLS") {
    navigator.sendBeacon(
      vitalsUrl,
      new URLSearchParams(body as unknown as Record<string, string>).toString()
    );
  }
}

export function reportWebVitals(
  onPerfEntry?: (entry: WebVitalsMetrics) => void
) {
  try {
    // Check if PerformanceObserver is available
    if ("PerformanceObserver" in window) {
      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[
            entries.length - 1
          ] as PerformanceEntryWithDuration;
          const metric: WebVitalsMetrics = {
            name: "LCP",
            value: lastEntry.startTime + lastEntry.duration,
            rating: getLCPRating(lastEntry.startTime + lastEntry.duration),
            delta: 0,
            id: `lcp-${Date.now()}`,
            navigationType: "LCP",
          };
          if (onPerfEntry) onPerfEntry(metric);
          sendToAnalytics(metric);
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        if (import.meta.env.DEV) {
          console.debug("LCP monitoring not available", e);
        }
      }

      // Cumulative Layout Shift (CLS)
      try {
        const clsObserver = new PerformanceObserver((list) => {
          const value = list.getEntries().reduce((acc, entry) => {
            const layoutShift = entry as LayoutShift;
            return !layoutShift.hadRecentInput ? acc + layoutShift.value : acc;
          }, 0);

          const metric: WebVitalsMetrics = {
            name: "CLS",
            value,
            rating: getCLSRating(value),
            delta: 0,
            id: `cls-${Date.now()}`,
            navigationType: "CLS",
          };
          if (onPerfEntry) onPerfEntry(metric);
          sendToAnalytics(metric);
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        if (import.meta.env.DEV) {
          console.debug("CLS monitoring not available", e);
        }
      }

      // First Input Delay (FID) / Interaction to Next Paint (INP)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const firstInputDelay =
              (entry as FirstInput).processingStart - entry.startTime;
            const metric: WebVitalsMetrics = {
              name: "FID",
              value: firstInputDelay,
              rating: getFIDRating(firstInputDelay),
              delta: 0,
              id: `fid-${Date.now()}`,
              navigationType: "FID",
            };
            if (onPerfEntry) onPerfEntry(metric);
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });
      } catch (e) {
        if (import.meta.env.DEV) {
          console.debug("FID monitoring not available", e);
        }
      }
    }

    // Navigation Timing API for page load metrics
    if ("PerformanceNavigationTiming" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const navTiming = performance.getEntriesByType(
            "navigation"
          )[0] as PerformanceNavigationTiming;
          if (navTiming) {
            const metric: WebVitalsMetrics = {
              name: "Page Load",
              value: navTiming.loadEventEnd - navTiming.loadEventStart,
              rating: "good",
              delta: 0,
              id: `pageload-${Date.now()}`,
              navigationType: "navigation",
            };
            if (onPerfEntry) onPerfEntry(metric);
          }
        }, 0);
      });
    }
  } catch (e) {
    if (import.meta.env.DEV) {
      console.debug("Web Vitals monitoring error:", e);
    }
  }
}

function getLCPRating(value: number): "good" | "needs-improvement" | "poor" {
  return value <= 2500 ? "good" : value <= 4000 ? "needs-improvement" : "poor";
}

function getCLSRating(value: number): "good" | "needs-improvement" | "poor" {
  return value <= 0.1 ? "good" : value <= 0.25 ? "needs-improvement" : "poor";
}

function getFIDRating(value: number): "good" | "needs-improvement" | "poor" {
  return value <= 100 ? "good" : value <= 300 ? "needs-improvement" : "poor";
}

interface PerformanceEntryWithDuration extends PerformanceEntry {
  duration: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInput extends PerformanceEntry {
  processingStart: number;
}
