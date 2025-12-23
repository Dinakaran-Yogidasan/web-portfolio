import React from "react";
import Section from "./ui/Section";
import program from "../assets/images/programmer.jpg";
import Title from "./ui/Title";
import { portfolioData } from "../data/portfolio";

const About: React.FC = () => {
  return (
    <Section
      id="about"
      className="py-16 md:py-24 relative overflow-hidden px-4 md:px-0"
    >
      <Title
        title={portfolioData.aboutMe.title}
        subTitle={portfolioData.aboutMe.subTitle}
        titleBio={portfolioData.aboutMe.titleBio}
      />
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Image Column */}
        <div className="animate-slide-left" style={{ animationDelay: "0.3s" }}>
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
              {/* Floating Stats Card */}
              <div
                className="absolute bottom-4 md:bottom-8 left-4 md:left-6 right-4 md:right-6 stats-card"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="glass-card rounded-2xl bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-xl border border-white/10 p-4 md:p-6 shadow-2xl hover:border-neon-cyan/50 transition-all duration-300">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="border-r border-white/10 pr-4 md:pr-6">
                      <p className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold">
                        Experience
                      </p>
                      <p className="text-2xl md:text-4xl font-bold text-slate-300 bg-clip-text bg-linear-to-r from-neon-cyan to-neon-purple mt-2">
                        4+
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Years</p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold">
                        Projects
                      </p>
                      <p className="text-2xl md:text-4xl font-bold text-slate-300 bg-clip-text bg-linear-to-r from-neon-purple to-neon-cyan mt-2">
                        5+
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Text Column */}
        <div
          className="animate-slide-right flex flex-col justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Description Text */}
          <div className="space-y-6 mb-10">
            <p className="md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-stretch-90%">
              {portfolioData.aboutMe.bio}
            </p>
            <p className="md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed  font-stretch-90%">
              {portfolioData.aboutMe.subBio}
            </p>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {portfolioData.featureCards.map((feature, i) => (
              <div
                key={i}
                className={`p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 ${feature.hoverBorder} transition-colors group relative overflow-hidden`}
              >
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-linear-to-br from-neon-cyan/10 to-neon-purple/10 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                <div>
                  <feature.icon
                    className={`${feature.color} mb-3 group-hover:scale-125 transition-transform`}
                    size={28}
                  />
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 relative z-10">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
