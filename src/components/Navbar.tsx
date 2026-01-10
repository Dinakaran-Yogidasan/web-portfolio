import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { portfolioData } from "../data/portfolio";

// Constants
const SCROLL_THRESHOLD = 20;
const SCROLL_RETRY_DELAY = 50;

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth-scroll to hash when route or hash changes
  useEffect(() => {
    if (!location.hash) return;

    const tryScroll = () => {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      setTimeout(tryScroll, SCROLL_RETRY_DELAY);
    };
    tryScroll();
  }, [location.pathname, location.hash]);

  // Memoized navigation handler
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);

      if (href.startsWith("#")) {
        navigate({ pathname: "/", hash: href });
      } else {
        navigate(href);
      }
    },
    [navigate]
  );

  // Memoized logo click handler
  const handleLogoClick = useCallback(() => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  const themeToggleAriaLabel = useMemo(
    () => `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
    [theme]
  );

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  const navbarBgClass = scrolled
    ? "py-0 bg-bg-page/90 border-b border-border backdrop-blur-md shadow-sm"
    : "py-4 bg-transparent";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBgClass}`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div
            className="shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleLogoClick();
              }
            }}
            aria-label="Home"
          >
            <img
              src="/logo.svg"
              alt="Danny.Dev logo"
              className="rounded-xl w-9 h-9 sm:w-10 sm:h-10"
              loading="lazy"
              decoding="async"
            />
            <span className="font-display font-bold text-lg sm:text-xl text-text-title">
              DY
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {portfolioData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-text-body hover:text-primary  transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-bg-card transition-colors duration-200"
                aria-label={themeToggleAriaLabel}
                title={themeToggleAriaLabel}
              >
                <ThemeIcon
                  size={20}
                  className={
                    theme === "dark" ? "text-yellow-500" : "text-text-body"
                  }
                />
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-bg-card transition-colors duration-200"
              aria-label={themeToggleAriaLabel}
            >
              <ThemeIcon
                size={18}
                className={
                  theme === "dark" ? "text-yellow-500" : "text-text-body"
                }
              />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-title hover:bg-bg-card transition-colors duration-200"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-bg-page/95 backdrop-blur-md border-b border-border">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-text-body hover:text-primary hover:bg-bg-card transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block mt-4 px-4 py-3 rounded-lg bg-primary text-white font-medium text-center hover:opacity-90 transition-opacity duration-200"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
