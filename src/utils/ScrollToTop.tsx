import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Track scroll to toggle visibility and update progress ring
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(pct);
      setIsVisible(scrollTop > 200);
    };

    // Initialize immediately
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  if (!isVisible) return null;

  const degrees = Math.round(progress * 360);
  const ringColor = "#22d3ee"; // cyan-400
  const ringTrack = "rgba(34,211,238,0.2)";

  return (
    <div
      className="fixed z-50 group"
      style={{
        right: "clamp(1rem, 2vw, 2rem)",
        bottom:
          "calc(env(safe-area-inset-bottom, 0px) + clamp(1rem, 2vw, 2rem))",
      }}
      aria-hidden={false}
    >
      <div
        className="rounded-full p-0.5 shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `conic-gradient(${ringColor} ${degrees}deg, ${ringTrack} 0deg)`,
        }}
      >
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-white/80 text-slate-900 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:bg-slate-900/80 dark:text-white"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 rounded-md bg-slate-900/90 px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover:-top-10 group-hover:opacity-100 dark:bg-slate-800/90">
        Back to top
      </span>
    </div>
  );
}
