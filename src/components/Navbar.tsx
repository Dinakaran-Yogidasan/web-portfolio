import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { portfolioData } from "../data/portfolio";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth-scroll to hash when route or hash changes (waits until element exists)
  useEffect(() => {
    if (!location.hash) return;
    const target = location.hash;
    const tryScroll = () => {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // Retry briefly if content hasn't mounted yet
      setTimeout(tryScroll, 50);
    };
    tryScroll();
  }, [location.pathname, location.hash]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("#")) {
      // Push /#section so the effect above can handle scrolling
      navigate({ pathname: "/", hash: href });
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
          : "py-2 sm:py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div
            className="shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-neon-cyan/30 to-blue-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <img
                src="/logo.svg"
                alt="Danny.Dev logo"
                className="rounded-xl w-9 h-9 sm:w-10 sm:h-10 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-neon-cyan dark:group-hover:text-neon-cyan transition-colors duration-300">
              Danny<span className="text-neon-cyan">.Dev</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
              {portfolioData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e: never) => handleNavClick(e, link.href)}
                  className="relative px-5 py-2 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-pointer group/link"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-linear-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group/theme relative overflow-hidden"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <span className="relative z-10 block transform group-hover/theme:scale-110 transition-transform duration-300">
                  {theme === "dark" ? (
                    <Sun size={20} className="text-yellow-400" />
                  ) : (
                    <Moon
                      size={20}
                      className="text-slate-600 dark:text-slate-400"
                    />
                  )}
                </span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="relative px-6 py-2.5 rounded-full bg-linear-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 text-sm font-bold overflow-hidden group/cta transition-all duration-300 hover:shadow-xl hover:shadow-neon-cyan/30 dark:hover:shadow-neon-cyan/20"
              >
                <span className="relative z-10">Hire Me</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-slate-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 transition-all duration-300"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? (
                <X
                  size={20}
                  className="transform rotate-0 transition-transform duration-300"
                />
              ) : (
                <Menu
                  size={20}
                  className="transform rotate-0 transition-transform duration-300"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {portfolioData.navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e: never) => handleNavClick(e, link.href)}
                className="block px-5 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-neon-cyan dark:hover:text-neon-cyan hover:bg-slate-100/80 dark:hover:bg-slate-900/80 transition-all duration-300 transform hover:translate-x-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e: never) => handleNavClick(e, "#contact")}
              className="block mt-4 px-5 py-3.5 rounded-xl bg-linear-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 font-bold text-center transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/30 transform hover:scale-[1.02]"
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
