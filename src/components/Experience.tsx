import React from "react";
import Section from "./ui/Section";
import { portfolioData } from "../data/portfolio";
import { Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import Title from "./ui/Title";

const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      className="py-26 md:py-24 relative overflow-hidden px-4 md:px-0"
    >
      {/* Section Title */}
      <Title
        title={portfolioData.experienceBio.title}
        subTitle={portfolioData.experienceBio.subTitle}
        titleBio={portfolioData.experienceBio.titleBio}
      />
      <div className="relative mx-auto px-4 sm:px-6">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2" />
        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Desktop Date */}
              <div className="hidden md:flex w-1/2 items-start justify-center pt-1">
                <div
                  className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500 gap-2 border border-slate-200 dark:border-slate-800 backdrop-blur-sm ${
                    idx % 2 === 0 ? "ml-auto mr-40" : "mr-auto ml-40"
                  }`}
                >
                  <Calendar size={14} className="text-neon-purple" />
                  {exp.period}
                </div>
              </div>

              {/* Center Node */}
              <div className="absolute left-2.5 md:left-1/2 top-0 w-4 h-4 rounded-full text-slate-500  bg-slate-200 dark:bg-slate-950 border-2 border-neon-cyan shadow-[rgba(6,182,212,0.4)] md:-translate-x-1/2 transform translate-y-2 z-10">
                <div className="absolute inset-0 bg-neon-cyan opacity-50 rounded-full  bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500" />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-20 md:pl-0">
                <div
                  className={`relative p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-neon-cyan/30 transition-all duration-300 group ${
                    idx % 2 === 0
                      ? "md:text-left md:mr-16"
                      : "md:text-left md:ml-16"
                  }`}
                >
                  {/* Mobile Date */}
                  <div className="md:hidden mb-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div
                      className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500 gap-2 border border-slate-200 dark:border-slate-800 backdrop-blur-sm`}
                    >
                      <Calendar size={14} className="text-neon-purple" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-neon-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-slate-500 dark:text-slate-400 font-medium">
                      <Briefcase size={16} className="text-neon-purple" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-1 text-neon-emerald shrink-0 dark:text-slate-300"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
