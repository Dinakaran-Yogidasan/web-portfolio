import React, { memo } from "react";
import program from "../assets/images/programmer.jpg";
import Title from "./ui/Title";
import { portfolioData } from "../data/portfolio";

// Constants
const ANIMATION_DELAYS = {
  image: "0.3s",
  statsCard: "0.6s",
  text: "0.4s",
};

const STATS_DATA = [
  {
    label: "Experience",
    value: "4+",
    unit: "Years",
    borderClass: "border-r border-white/10 pr-4 md:pr-6",
  },
  {
    label: "Projects",
    value: "5+",
    unit: "Completed",
    borderClass: "",
  },
];

const GLASS_CARD_CLASSES =
  "glass-card rounded-2xl bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-xl border border-white/10 p-4 md:p-6 shadow-2xl hover:border-neon-cyan/50 transition-all duration-300";

// Sub-components
const StatsCard = memo(() => (
  <div
    className="absolute bottom-4 md:bottom-8 left-4 md:left-6 right-4 md:right-6 stats-card"
    style={{ animationDelay: ANIMATION_DELAYS.statsCard }}
  >
    <div className={GLASS_CARD_CLASSES}>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {STATS_DATA.map((stat, idx) => (
          <div key={idx} className={stat.borderClass}>
            <p className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold">
              {stat.label}
            </p>
            <p className="text-2xl md:text-4xl font-bold text-slate-300 bg-clip-text bg-linear-to-r from-neon-cyan to-neon-purple mt-2">
              {stat.value}
            </p>
            <p className="text-xs text-slate-400 mt-1">{stat.unit}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
));
StatsCard.displayName = "StatsCard";

const ImageSection = memo(() => (
  <div
    className="animate-slide-left"
    style={{ animationDelay: ANIMATION_DELAYS.image }}
  >
    <div className="image-container">
      {/* Glowing border effect */}
      <div className="absolute -inset-4 md:-inset-6 bg-linear-to-r from-neon-cyan/20 to-neon-purple/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity hidden md:block"></div>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-neon-purple/30 to-neon-cyan/20 mix-blend-overlay z-10 pointer-events-none group-hover:from-neon-purple/40 group-hover:to-neon-cyan/30 transition-all duration-300" />
        <img
          src={program}
          alt="Full-stack Developer"
          className="w-full h-auto object-cover aspect-auto md:aspect-4/5 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <StatsCard />
      </div>
    </div>
  </div>
));
ImageSection.displayName = "ImageSection";

const FeatureCard = memo(
  ({
    feature,
    index,
  }: {
    feature: (typeof portfolioData.featureCards)[0];
    index: number;
  }) => (
    <div
      key={index}
      className={`p-6 bg-bg-card rounded-2xl shadow-sm border border-border ${feature.hoverBorder} transition-colors group relative overflow-hidden`}
    >
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-linear-to-br from-neon-cyan/10 to-neon-purple/10 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
      <div>
        <feature.icon
          className={`${feature.color} mb-3 group-hover:scale-125 transition-transform`}
          size={28}
        />
      </div>

      <h3 className="font-bold text-text-title mb-2 relative z-10">
        {feature.title}
      </h3>
      <p className="text-xs text-text-body relative z-10">{feature.desc}</p>
    </div>
  )
);
FeatureCard.displayName = "FeatureCard";

const ContentSection = memo(() => (
  <div
    className="animate-slide-right flex flex-col justify-center"
    style={{ animationDelay: ANIMATION_DELAYS.text }}
  >
    {/* Description Text */}
    <div className="space-y-6 mb-10">
      <p className="md:text-md text-text-body leading-relaxed">
        {portfolioData.aboutMe.bio}
      </p>
      <p className="md:text-md text-text-body leading-relaxed">
        {portfolioData.aboutMe.subBio}
      </p>
      <p className="md:text-md text-text-body leading-relaxed">
        {portfolioData.aboutMe.description}
      </p>
      <p className="md:text-md text-text-body leading-relaxed">
        {portfolioData.aboutMe.shortDescription}
      </p>
    </div>
    {/* Feature Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {portfolioData.featureCards.map((feature, i) => (
        <FeatureCard key={i} feature={feature} index={i} />
      ))}
    </div>
  </div>
));
ContentSection.displayName = "ContentSection";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto md:py-24 relative overflow-hidden"
    >
      <Title
        title={portfolioData.aboutMe.title}
        subTitle={portfolioData.aboutMe.subTitle}
        titleBio={portfolioData.aboutMe.titleBio}
      />
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <ImageSection />
        <ContentSection />
      </div>
    </div>
  );
};

export default About;
