import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import { reportWebVitals } from "./utils/web-vitals";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>
);

// Report Web Vitals metrics to console in development only
if (import.meta.env.DEV) {
  reportWebVitals((metric) => {
    console.log(
      `${metric.name}:`,
      metric.value.toFixed(2),
      `(${metric.rating})`
    );
  });
}
