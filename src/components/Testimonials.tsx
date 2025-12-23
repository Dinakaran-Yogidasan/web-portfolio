import React from "react";
import Section from "./ui/Section";
import { Quote, Star } from "lucide-react";
import Title from "./ui/Title";
import { portfolioData } from "../data/portfolio";

const Testimonials: React.FC = () => {
  return (
    <>
      <Section
        id="testimonials"
        className="py-26 md:py-24 relative overflow-hidden px-4 md:px-0"
      >
        {/* Section Title */}
        <Title
          title={portfolioData.feedBack.title}
          subTitle={portfolioData.feedBack.subTitle}
          titleBio={portfolioData.feedBack.titleBio}
        />
        <div className="grid md:grid-cols-1 gap-8">
          {portfolioData.testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-neon-cyan to-neon-purple rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>

              <Quote className="absolute top-6 right-6 text-slate-200 dark:text-slate-800 h-10 w-10 rotate-180" />

              <p className="relative z-10 text-slate-600 dark:text-slate-300 mb-8 leading-relaxed italic text-sm md:text-base">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-cyan rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity"></div>

                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover relative z-10"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-neon-cyan transition-colors">
                    {t.author}
                  </h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
