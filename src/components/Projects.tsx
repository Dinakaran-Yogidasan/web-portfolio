import React, { useState } from "react";
import Section from "./ui/Section";
import { portfolioData } from "../data/portfolio";
import { Github, Eye, X, Loader2, ArrowRight } from "lucide-react";
import type { Project } from "../types";
import Title from "./ui/Title";

type ProjectWithDetails = Project & {
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
};

const categoryConfig = {
  Frontend: {
    badge: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
    modal: "bg-blue-100 text-blue-700",
  },
  DevOps: {
    badge: "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
    modal: "bg-purple-100 text-purple-700",
  },
  Fullstack: {
    badge: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
    modal: "bg-emerald-100 text-emerald-700",
  },
};

const ProjectModal: React.FC<{
  project: ProjectWithDetails;
  isOpen: boolean;
  onClose: () => void;
}> = ({ project, isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-linear-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {["bg-red-400", "bg-yellow-400", "bg-green-400"].map(
                (color, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${color}`} />
                )
              )}
            </div>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 ml-2">
              {project.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={20} className="text-slate-500 dark:text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="w-full h-96 flex items-center justify-center bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="animate-spin text-blue-500" size={48} />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Loading preview...
                </p>
              </div>
            </div>
          ) : (
            <img
              src={
                (project as ProjectWithDetails).imageUrl ||
                "/project-placeholder.png"
              }
              alt={project.title}
              className="w-full h-auto animate-fadeIn"
            />
          )}

          <div className="p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {project.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {(project.tags || []).map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-linear-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3  bg-blue-400 text-slate-900 rounded-xl font-bold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105"
                >
                  <Eye size={20} />
                  View Live Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <Github size={20} />
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Frontend", "DevOps", "Fullstack"];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <Section
      id="projects"
      className="py-26 md:py-24 relative overflow-hidden px-4 md:px-0"
    >
      <Title
        title={portfolioData.project.title}
        subTitle={portfolioData.project.subTitle}
        titleBio={portfolioData.project.titleBio}
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
              activeFilter === category
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50"
                : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl hover:border-neon-cyan/50 dark:hover:border-neon-cyan/30 transition-all duration-500 flex flex-col h-full hover:-translate-y-2"
          >
            {/* Image Container */}
            {project.imageUrl && (
              <div className="relative h-48 sm:h-56 md:h-64 bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 flex flex-col p-5 md:p-6 lg:p-8">
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`inline-block px-3 md:px-4 py-1.5 text-xs md:text-sm font-bold rounded-full ${
                    categoryConfig[
                      project.category as keyof typeof categoryConfig
                    ]?.badge || "bg-slate-300 text-slate-700"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-6 grow leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(project.tags || []).slice(0, 3).map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-linear-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {(project.tags || []).length > 3 && (
                  <span className="px-2.5 py-1 bg-linear-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-lg font-medium">
                    +{(project.tags || []).length - 3}
                  </span>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.liveUrl && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 text-white bg-blue-500 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-cyan/40 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                  >
                    <Eye size={16} />
                    View
                  </button>
                )}
                {(project as ProjectWithDetails).githubUrl && (
                  <a
                    href={(project as ProjectWithDetails).githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 bg-slate-900 dark:bg-slate-800 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 dark:border-slate-600 text-sm md:text-base"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <button
          type="button"
          className=" inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
        >
          View All Projects
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject || portfolioData.projects[0]}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
};

export default Projects;
