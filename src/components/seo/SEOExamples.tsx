import React from "react";
import SEO from "./SEO";

/**
 * Example: How to use SEO component in different sections/pages
 *
 * This file demonstrates how to add custom SEO for specific pages or sections
 */

// Example 1: Projects Page
export const ProjectsPageSEO: React.FC = () => (
  <SEO
    title="Projects - Innovative Web Development Portfolio"
    description="Explore my portfolio of full-stack web development projects including React applications, DevOps solutions, and cloud infrastructure implementations."
    keywords="React projects, Web development portfolio, Full-stack projects, DevOps projects, AWS projects, Cloud solutions"
    url="https://techversey.com/#projects"
  />
);

// Example 2: Individual Project Page
export const ProjectDetailSEO: React.FC<{
  title: string;
  description: string;
  image?: string;
}> = ({ title, description, image }) => (
  <SEO
    title={`${title} - Project Case Study`}
    description={description}
    keywords={`${title}, React, TypeScript, Web Development, Case Study`}
    url={`https://techversey.com/project/${title
      .toLowerCase()
      .replace(/\s+/g, "-")}`}
    image={image}
    type="article"
  />
);

// Example 3: Blog Post
export const BlogPostSEO: React.FC<{
  title: string;
  description: string;
  author?: string;
  publishDate?: string;
  image?: string;
}> = ({ title, description, author = "Dinakaran Dev", image }) => (
  <SEO
    title={title}
    description={description}
    keywords="Web Development, React, DevOps, Cloud Computing, Programming Tutorial"
    url={`https://techversey.com/blog/${title
      .toLowerCase()
      .replace(/\s+/g, "-")}`}
    image={image}
    type="article"
    author={author}
  />
);

// Example 4: Contact Page
export const ContactPageSEO: React.FC = () => (
  <SEO
    title="Contact - Get in Touch for Web Development Projects"
    description="Contact Dinakaran Dev for frontend development, DevOps consulting, or collaboration opportunities. Available for freelance projects and full-time positions."
    keywords="Contact Web Developer, Hire React Developer, DevOps Consultant, Frontend Developer Contact"
    url="https://techversey.com/#contact"
  />
);

// Example 5: Skills/Services Page
export const SkillsPageSEO: React.FC = () => (
  <SEO
    title="Skills & Expertise - Frontend Development & DevOps"
    description="Expert in React, TypeScript, AWS, Docker, CI/CD pipelines, and modern web development. Comprehensive skill set for building scalable web applications."
    keywords="React Developer Skills, DevOps Skills, AWS Expertise, TypeScript, Docker, CI/CD, Web Development Skills"
    url="https://techversey.com/#skills"
  />
);

/**
 * Usage in your components:
 *
 * import { ProjectsPageSEO } from './components/SEOExamples';
 *
 * const ProjectsPage = () => (
 *   <>
 *     <ProjectsPageSEO />
 *     <div>Your projects content...</div>
 *   </>
 * );
 */
