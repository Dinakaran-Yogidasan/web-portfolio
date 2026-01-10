import React, { memo } from "react";
import {
  ArrowRight,
  Download,
  Server,
  Terminal,
  Code2,
  GitBranch,
  CheckCircle2,
  Activity,
  Cpu,
  Layers,
} from "lucide-react";
import RotatingJobTitle from "../utils/RotatingJobTitle";
import DinakaranYogidasan from "../assets/resume/Dinakaran-Yogidasan.pdf";
import { portfolioData } from "../data/portfolio";

// Constants
const GLOW_CONFIG = [
  {
    position: "top-[6%] right-[2%]",
    size: "w-105 h-105",
    color: "bg-neon-purple/10",
    duration: "4s",
    delay: "0s",
  },
  {
    position: "bottom-[6%] left-[2%]",
    size: "w-105 h-105",
    color: "bg-neon-cyan/10",
    duration: "5s",
    delay: "0.5s",
  },
];

const ANIMATION_DELAYS = {
  badge: "0.1s",
  title: "0.2s",
  bio: "0.3s",
  buttons: "0.4s",
  skills: "0.5s",
  visual: "0.3s",
  card: "0.4s",
  code: "0.6s",
  server: "0.8s",
  branch: "1s",
};

const SKILL_BADGE_CLASSES =
  "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-card border border-border hover:bg-bg-card transition-all cursor-default animate-fadeInUp hover:scale-110 hover:shadow-lg";

const GLASS_CARD_CLASSES =
  "glass-card rounded-xl shadow-xl z-20 bg-white dark:bg-slate-800 border border-white/20 dark:border-slate-700 transition-all animate-bounce hover:scale-110";

// Sub-components
const StatusBadge = memo(
  ({
    label,
    value,
    icon: Icon,
    progress,
    iconColor,
  }: {
    label: string;
    value: string;
    icon: React.ElementType;
    progress?: number;
    iconColor: string;
  }) => (
    <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase">
          {label}
        </span>
        <Icon size={14} className={iconColor} />
      </div>
      <div className="text-xl font-bold text-slate-800 dark:text-white">
        {value}
      </div>
      {progress !== undefined && (
        <div className="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  )
);
StatusBadge.displayName = "StatusBadge";

const CodeBlock = memo(() => (
  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-3 opacity-20">
      <Cpu size={40} className="text-white" />
    </div>
    <div className="space-y-2 font-mono text-[10px] md:text-xs relative z-10">
      <div className="flex items-center gap-2 text-blue-400 border-b border-slate-800 pb-2 mb-2">
        <span className="text-pink-400">const</span>
        <span className="text-yellow-300">App</span> = () ={">"}{" "}
        <span className="text-emerald-400">{"<div />"}</span>;
      </div>
      <div className="flex items-center gap-2 text-emerald-400">
        <CheckCircle2 size={12} />
        <span>Deployment: production</span>
      </div>
      <div className="flex items-center gap-2 text-slate-400">
        <GitBranch size={12} />
        <span>main • 3m ago</span>
      </div>
    </div>
  </div>
));
CodeBlock.displayName = "CodeBlock";

const PipelineBlock = memo(() => (
  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-3 opacity-20">
      <Cpu size={40} className="text-white" />
    </div>
    <div className="space-y-2 font-mono text-[10px] md:text-xs relative z-10">
      <div className="flex items-center gap-2 text-emerald-400">
        <CheckCircle2 size={12} />
        <span>Pipeline #4298 success</span>
        <span className="text-slate-500 ml-auto">24s</span>
      </div>
      <div className="flex items-center gap-2 text-blue-400">
        <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        <span>Building docker image...</span>
      </div>
      <div className="text-slate-500 pl-5">
        {`> FROM node:18-alpine`} <br />
        {`> RUN npm install`}
      </div>
    </div>
  </div>
));
PipelineBlock.displayName = "PipelineBlock";

const FloatingBadge = memo(
  ({
    icon: Icon,
    label,
    delay,
    color,
  }: {
    icon: React.ElementType;
    label?: string;
    delay: string;
    color: string;
    position?: string;
  }) => (
    <div
      className={`${GLASS_CARD_CLASSES} flex items-center gap-3 p-3`}
      style={{ animationDelay: delay }}
    >
      <Icon className={`w-6 h-6 ${color}`} />
      {label && (
        <div className="text-xs font-bold">
          <div className="text-[9px] text-slate-400 uppercase">{label}</div>
          Ready
        </div>
      )}
    </div>
  )
);
FloatingBadge.displayName = "FloatingBadge";

const BackgroundGlows = memo(() => (
  <div
    className="absolute inset-0 overflow-hidden -z-10 pointer-events-none hidden sm:block"
    aria-hidden="true"
  >
    {GLOW_CONFIG.map((glow, i) => (
      <div
        key={i}
        className={`absolute ${glow.position} ${glow.size} ${glow.color} rounded-full blur-[80px] mix-blend-screen opacity-40 animate-pulse`}
        style={{
          animationDuration: glow.duration,
          animationDelay: glow.delay,
        }}
      />
    ))}
  </div>
));
BackgroundGlows.displayName = "BackgroundGlows";

const SkillBadges = memo(() => (
  <div
    className="pt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-text-body dark:text-text-body animate-fadeInUp"
    style={{ animationDelay: ANIMATION_DELAYS.skills }}
  >
    {portfolioData.programmingLanguage.map((skill, i) => (
      <div
        key={i}
        className={SKILL_BADGE_CLASSES}
        style={{ animationDelay: `${0.6 + i * 0.1}s` }}
      >
        <span className={`font-bold text-xs ${skill.color}`}>
          {skill.label}
        </span>
        <span className="text-sm font-medium text-text-title">
          {skill.name}
        </span>
      </div>
    ))}
  </div>
));
SkillBadges.displayName = "SkillBadges";

const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative min-h-screen flex items-center justify-center pt-28 lg:pt-32 pb-16 overflow-hidden"
      aria-label="Hero section - Introduction"
    >
      <BackgroundGlows />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10 order-1 animate-fadeInUp">
          {/* Status Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card dark:bg-bg-card border border-border dark:border-border mb-8 backdrop-blur-sm shadow-sm animate-fadeInDown"
            style={{ animationDelay: ANIMATION_DELAYS.badge }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest dark:text-text-title text-text-body uppercase">
              {portfolioData.work}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-title dark:text-text-title leading-[1.1] mb-6 animate-fadeInUp"
            itemProp="name"
            style={{ animationDelay: ANIMATION_DELAYS.title }}
          >
            <span className="block">Architecting</span>
            <span className="block text-primary pb-1">Next‑Gen</span>
            <span className="block">Web Experiences</span>
          </h1>

          {/* Bio */}
          <p
            className="text-lg md:text-xl text-text-body dark:text-text-body max-w-2xl leading-relaxed animate-fadeInUp"
            style={{ animationDelay: ANIMATION_DELAYS.bio }}
          >
            Hi, I'm {portfolioData.name}, a{" "}
            <RotatingJobTitle className=" text-primary inline font-bold" />{" "}
            {portfolioData.bio}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2 animate-fadeInUp"
            style={{ animationDelay: ANIMATION_DELAYS.buttons }}
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-white focus:ring-2 focus:ring-primary/60 hover:shadow-xl transition duration-200 flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href={DinakaranYogidasan}
              className="px-8 py-4 rounded-full border border-border bg-bg-card/60 backdrop-blur-sm text-text-title font-semibold hover:bg-bg-card transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              download="Dinakaran-Yogidasan.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <SkillBadges />
        </div>

        {/* Visual Content */}
        <div
          className="relative flex items-center justify-center order-2 mt-8 lg:mt-0 w-full animate-fadeInRight"
          style={{ animationDelay: ANIMATION_DELAYS.visual }}
        >
          <div className="relative w-full max-w-[100vw] sm:max-w-95 md:max-w-120 lg:max-w-130 aspect-square sm:aspect-4/3">
            {/* Back Glow */}
            <div
              className="absolute top-10 right-10 w-3/4 h-3/4 bg-linear-to-br from-neon-purple to-indigo-600 rounded-full opacity-15 blur-3xl animate-pulse"
              style={{ animationDuration: "6s" }}
            />

            {/* Main Dashboard Card */}
            <div
              className="absolute inset-0 glass-card rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/20 dark:border-slate-700 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl transition-all animate-fadeInUp hover:shadow-2xl hover:shadow-neon-cyan/20"
              style={{ animationDelay: ANIMATION_DELAYS.card }}
            >
              {/* Window Header */}
              <div className="h-10 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 space-x-2 bg-slate-100/50 dark:bg-slate-800/50">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-md text-[10px] text-slate-500 font-mono flex items-center gap-2">
                  <Terminal size={10} /> danny-dev/dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-5 grid gap-4">
                {/* Top Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <StatusBadge
                    label="Uptime (K8s)"
                    value="99.99%"
                    icon={Activity}
                    progress={99}
                    iconColor="text-emerald-500"
                  />
                  <StatusBadge
                    label="Bundle Size"
                    value="42 KB"
                    icon={Layers}
                    iconColor="text-neon-purple"
                  />
                </div>

                {/* Code and Pipeline Blocks */}
                <CodeBlock />
                <PipelineBlock />
              </div>
            </div>

            {/* Floating Badges */}
            <div
              className={`absolute -top-6 -left-6 p-3 ${GLASS_CARD_CLASSES} flex items-center justify-center`}
              style={{ animationDelay: ANIMATION_DELAYS.code }}
            >
              <Code2 className="w-8 h-8 text-blue-500" />
            </div>

            <div
              className={`absolute -bottom-4 -right-4 p-4 ${GLASS_CARD_CLASSES}`}
              style={{ animationDelay: ANIMATION_DELAYS.server }}
            >
              <Server className="w-6 h-6 text-neon-purple" />
              <div className="text-xs font-bold text-white dark:text-white">
                <div className="text-[9px] text-slate-400 uppercase">
                  Cluster
                </div>
                Ready
              </div>
            </div>

            <div
              className={`absolute top-1/3 -left-8 p-3 ${GLASS_CARD_CLASSES} flex items-center justify-center`}
              style={{ animationDelay: ANIMATION_DELAYS.branch }}
            >
              <GitBranch className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
