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
import Section from "./ui/Section";
import RotatingJobTitle from "../utils/RotatingJobTitle";
import DinakaranYogidasan from "../assets/resume/Dinakaran-Yogidasan.pdf";
import { portfolioData } from "../data/portfolio";

const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-32 pb-16 overflow-hidden"
      aria-label="Hero section - Introduction"
    >
      {/* Dynamic Background Elements */}
      <div
        className="absolute inset-0 overflow-hidden -z-10 pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        {/* soften glows to reduce visual noise */}
        <div
          className="absolute top-[6%] right-[2%] w-[420px] h-[420px] bg-neon-purple/10 rounded-full blur-[80px] mix-blend-screen opacity-40 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-[6%] left-[2%] w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[80px] mix-blend-screen opacity-40 animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10 order-1 animate-fadeInUp">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 mb-8 backdrop-blur-sm shadow-sm animate-fadeInDown"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-slate-600 dark:text-slate-300 uppercase">
                {portfolioData.work}
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 animate-fadeInUp"
              itemProp="name"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block">Architecting</span>
              <span className="block text-blue-500  pb-1">Next‑Gen</span>
              <span className="block">Experiences</span>
            </h1>
          </div>

          <p
            className="text-lg md:text-xl text-slate-700 dark:text-slate-400 max-w-2xl font-stretch-95% leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Hi, I'm {portfolioData.name}, a{" "}
            <RotatingJobTitle className=" text-blue-500 inline font-bold" />{" "}
            {portfolioData.bio}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className=" group px-8 py-4 rounded-full bg-linear-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200  flex items-center justify-center gap-2 "
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href={DinakaranYogidasan}
              className="px-8 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              download="Dinakaran-Yogidasan.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <div
            className="pt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400 animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            {portfolioData.programmingLanguage.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-all cursor-default animate-fadeInUp hover:scale-110 hover:shadow-lg"
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <span className={`font-bold text-xs ${skill.color}`}>
                  {skill.label}
                </span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Content */}
        <div
          className="relative flex items-center justify-center order-2 mt-8 lg:mt-0 w-full animate-fadeInRight"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Abstract Phone/Window Composition */}
          <div className="relative w-full max-w-[100vw] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] aspect-square sm:aspect-4/3">
            {/* Back Glow */}
            <div
              className="absolute top-10 right-10 w-3/4 h-3/4 bg-linear-to-br from-neon-purple to-indigo-600 rounded-full opacity-15 blur-3xl animate-pulse"
              style={{ animationDuration: "6s" }}
            />

            {/* Main Dashboard Card */}
            <div
              className="absolute inset-0 glass-card rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/20 dark:border-slate-700 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl transition-all animate-fadeInUp hover:shadow-2xl hover:shadow-neon-cyan/20"
              style={{ animationDelay: "0.4s" }}
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
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Uptime (K8s)
                      </span>
                      <Activity size={14} className="text-emerald-500" />
                    </div>
                    <div className="text-xl font-bold text-slate-800 dark:text-white">
                      99.99%
                    </div>
                    <div className="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-[99%] bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Bundle Size
                      </span>
                      <Layers size={14} className="text-neon-purple" />
                    </div>
                    <div className="text-xl font-bold text-slate-800 dark:text-white">
                      42 KB
                    </div>
                    <div className="flex gap-0.5 mt-2">
                      <span className="text-[10px] text-emerald-500 font-mono">
                        -12% vs prev
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle Code/Pipeline Area */}
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
                {/* Pipeline Status Area */}
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
              </div>
            </div>

            {/* Floating Element 1 - Code Badge */}
            <div
              className="absolute -top-6 -left-6 p-3 glass-card rounded-xl shadow-xl z-20 bg-white dark:bg-slate-800 flex items-center justify-center border border-white/20 dark:border-slate-700 transition-all animate-bounce hover:scale-110"
              style={{ animationDelay: "0.6s" }}
            >
              <Code2 className="w-8 h-8 text-blue-500" />
            </div>

            {/* Floating Element 2 - Server Badge */}
            <div
              className="absolute -bottom-4 -right-4 p-4 glass-card rounded-xl shadow-xl z-20 bg-white dark:bg-slate-800 flex items-center gap-3 border border-white/20 dark:border-slate-700 transition-all animate-bounce hover:scale-110"
              style={{ animationDelay: "0.8s" }}
            >
              <Server className="w-6 h-6 text-neon-purple" />
              <div className="text-xs font-bold dark:text-white">
                <div className="text-[9px] text-slate-400 uppercase">
                  Cluster
                </div>
                Ready
              </div>
            </div>

            {/* Floating Element 3 - Branch Badge */}
            <div
              className="absolute top-1/3 -left-8 p-3 glass-card rounded-xl shadow-xl z-20 bg-white dark:bg-slate-800 flex items-center justify-center border border-white/20 dark:border-slate-700 transition-all animate-bounce hover:scale-110"
              style={{ animationDelay: "1s" }}
            >
              <GitBranch className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default memo(Hero);
