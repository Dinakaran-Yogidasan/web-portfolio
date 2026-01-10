import React, { memo } from "react";
import { portfolioData } from "../data/portfolio";

// Constants
const NAVIGATION_SECTIONS = [
  {
    title: "Social",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dinakarany2899/",
      },
      { label: "GitHub", href: "https://github.com/Dinakaran-Yogidasan" },
      {
        label: "Gmail",
        href: `mailto:${portfolioData.contact?.gmail || ""}`,
      },
    ],
  },
  {
    title: "Shortcuts",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },
] as const;

const CURRENT_YEAR = new Date().getFullYear();

// Sub-components
const Logo = memo(() => (
  <div className="flex justify-center lg:justify-start text-4xl text-text-title font-black gradient-text">
    DY
  </div>
));
Logo.displayName = "Logo";

const BrandSection = memo(() => (
  <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
    <Logo />
    <p className="py-8 text-md text-text-body lg:max-w-xs text-center lg:text-left">
      {portfolioData.footer.credit}
    </p>
    <a
      href="#contact"
      className="py-1 px-5 h-9 block w-fit bg-primary text-white focus:ring-2 focus:ring-primary/60 hover:shadow-xl rounded-full shadow-sm text-1xl mx-auto transition-all duration-500 hover:opacity-90 lg:mx-0"
    >
      Contact us
    </a>
  </div>
));
BrandSection.displayName = "BrandSection";

const NavigationLink = memo(
  ({ href, label }: { href: string; label: string }) => (
    <li className="mb-6 last:mb-0">
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
        {label}
      </a>
    </li>
  )
);
NavigationLink.displayName = "NavigationLink";

const NavigationSection = memo(
  ({
    title,
    links,
  }: {
    title: string;
    links: readonly { label: string; href: string }[];
  }) => (
    <div className="lg:mx-auto text-left text-text-body">
      <h4 className="text-lg font-medium mb-7 text-text-title">{title}</h4>
      <ul className="text-sm transition-all duration-500">
        {links.map((link) => (
          <NavigationLink
            key={link.label}
            href={link.href}
            label={link.label}
          />
        ))}
      </ul>
    </div>
  )
);
NavigationSection.displayName = "NavigationSection";

const SocialIcon = memo(
  ({ social }: { social: (typeof portfolioData.socialLinks)[0] }) => {
    const Icon = social.icon;
    return (
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg border border-border bg-bg-card transition-colors flex items-center justify-center"
        aria-label={`Visit my ${social.label}`}
        title={`Visit my ${social.label}`}
      >
        <Icon size={20} />
      </a>
    );
  }
);
SocialIcon.displayName = "SocialIcon";

const SocialLinks = memo(() => (
  <div className="flex mt-4 space-x-4 lg:mt-0">
    <div className="flex flex-wrap gap-3">
      {portfolioData.socialLinks.map((social, i) => (
        <SocialIcon key={i} social={social} />
      ))}
    </div>
  </div>
));
SocialLinks.displayName = "SocialLinks";

const Copyright = memo(() => (
  <span className="text-sm text-text-body">
    <a href="/" className="hover:text-primary transition-colors">
      DY
    </a>{" "}
    Copyright ©{CURRENT_YEAR}. All rights reserved.
  </span>
));
Copyright.displayName = "Copyright";

const Footer: React.FC = () => {
  return (
    <div
      id="footer"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto md:py-24 relative overflow-hidden"
    >
      <footer className="w-full text-text-body">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto">
            <BrandSection />
            {NAVIGATION_SECTIONS.map((section) => (
              <NavigationSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="py-7 border-t border-border">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <Copyright />
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
