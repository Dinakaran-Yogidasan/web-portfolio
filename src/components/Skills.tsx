import React, { memo } from "react";
import { portfolioData } from "../data/portfolio";
import { Code2, Terminal, ShieldCheck, Layout } from "lucide-react";
import Title from "./ui/Title";

// Enhanced color configuration with gradients
const colorConfig = {
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/20",
    text: "text-blue-600 dark:text-blue-400",
    hover:
      "group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500",
    border: "group-hover:border-blue-400/50",
    gradient: "from-blue-500 to-blue-600",
    light: "bg-blue-500/10 dark:bg-blue-500/20",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-800/20",
    text: "text-purple-600 dark:text-purple-400",
    hover:
      "group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500",
    border: "group-hover:border-purple-400/50",
    gradient: "from-purple-500 to-purple-600",
    light: "bg-purple-500/10 dark:bg-purple-500/20",
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-50 to-cyan-100/50 dark:from-cyan-900/30 dark:to-cyan-800/20",
    text: "text-cyan-600 dark:text-cyan-400",
    hover:
      "group-hover:bg-cyan-600 group-hover:text-white dark:group-hover:bg-cyan-500",
    border: "group-hover:border-cyan-400/50",
    gradient: "from-cyan-500 to-cyan-600",
    light: "bg-cyan-500/10 dark:bg-cyan-500/20",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/30 dark:to-emerald-800/20",
    text: "text-emerald-600 dark:text-emerald-400",
    hover:
      "group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500",
    border: "group-hover:border-emerald-400/50",
    gradient: "from-emerald-500 to-emerald-600",
    light: "bg-emerald-500/10 dark:bg-emerald-500/20",
  },
} as const;

type ColorKey = keyof typeof colorConfig;

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  colorClass: ColorKey;
}

// Constants
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Core",
    description:
      "Fluent in both strongly typed and dynamic languages that form the foundation of my work.",
    icon: <Code2 size={28} />,
    skills: portfolioData.skills.languages,
    colorClass: "blue",
  },
  {
    title: "Frontend & UI",
    description:
      "Building immersive user experiences with modern frameworks and component libraries.",
    icon: <Layout size={28} />,
    skills: portfolioData.skills.frontend,
    colorClass: "purple",
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Streamlining delivery pipelines with industry-standard automation and containerization tools.",
    icon: <Terminal size={28} />,
    skills: portfolioData.skills.devops,
    colorClass: "cyan",
  },
  {
    title: "Cloud, Security & Testing",
    description:
      "Ensuring scalability, observability, and robust security across cloud environments.",
    icon: <ShieldCheck size={28} />,
    skills: portfolioData.skills.cloudAndSec,
    colorClass: "emerald",
  },
];

// Sub-components
const IconBox = memo(
  ({ icon, colorClass }: { icon: React.ReactNode; colorClass: ColorKey }) => {
    const colors = colorConfig[colorClass];
    return (
      <div
        className={`w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3 ${colors.bg} ${colors.text} ${colors.hover} shadow-md group-hover:shadow-lg`}
      >
        {icon}
      </div>
    );
  }
);
IconBox.displayName = "IconBox";

const SkillTag = memo(
  ({
    skill,
    colorClass,
    delay,
  }: {
    skill: string;
    colorClass: ColorKey;
    delay: number;
  }) => {
    const colors = colorConfig[colorClass];
    return (
      <span
        className={`px-3 py-1.5 rounded-lg text-text-body font-medium text-xs md:text-sm border transition-all duration-300 transform hover:scale-105 hover:shadow-md ${colors.light} border-border`}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >
        {skill}
      </span>
    );
  }
);
SkillTag.displayName = "SkillTag";

const SkillCategoryCard = memo(
  ({ category, index }: { category: SkillCategory; index: number }) => {
    const colors = colorConfig[category.colorClass];

    return (
      <div
        className="group relative bg-bg-card backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />

        {/* Animated background icon */}
        <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 pointer-events-none transition-opacity duration-500">
          {React.cloneElement(
            category.icon as React.ReactElement<{ size?: number }>,
            {
              size: 100,
            }
          )}
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <IconBox icon={category.icon} colorClass={category.colorClass} />

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-text-title mb-2">
            {category.title}
          </h3>

          {/* Description */}
          <p className="text-text-body mb-6 md:mb-8 text-sm md:text-base leading-relaxed grow">
            {category.description}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {category.skills.map((skill, skillIdx) => (
              <SkillTag
                key={skill}
                skill={skill}
                colorClass={category.colorClass}
                delay={skillIdx * 30}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);
SkillCategoryCard.displayName = "SkillCategoryCard";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto md:py-24 relative overflow-hidden"
    >
      <Title
        title={portfolioData.skills.title}
        subTitle={portfolioData.skills.subTitle}
        titleBio={portfolioData.skills.titleBio}
      />

      <div className="relative z-10">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-0">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCategoryCard key={idx} category={category} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
