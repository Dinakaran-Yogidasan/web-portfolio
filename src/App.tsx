import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import ScrollToTop from "./utils/ScrollToTop";
import LoadingFallback from "./components/ui/LoadingFallback";

// Lazy load components for better performance
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));

const Home: React.FC = () => (
  <main className="relative">
    <Suspense fallback={<LoadingFallback />}>
      <Hero />
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      <About />
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      <Skills />
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      <Projects />
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      <Experience />
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<LoadingFallback />}>
      <Contact />
    </Suspense>
  </main>
);

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Example of how additional routes would be added
        <Route path="/project/:id" element={<ProjectDetail />} /> */}
      </Routes>
      <Footer />
    </>
  );
};
export default App;
