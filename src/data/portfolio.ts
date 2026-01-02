import { Cpu, Globe, Zap, Linkedin, Github } from "lucide-react";
import type { Project, Experience } from "../types.ts";
import userLogo from "../assets/images/userLogo.jpg"; // add this
export const portfolioData = {
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
  ],
  work: "Available for work",
  name: "Dinakaran Yogidasan",
  title: "Frontend Developer & DevOps Engineer",
  bio: "I build seamless bridges between pixel-perfect React interfaces and resilient cloud infrastructure. With a focus on high-performance web apps, and efficient CI/CD workflows, I turn complex engineering challenges into elegant, reliable solutions",
  programmingLanguage: [
    { label: "Js", name: "JavaScript", color: "text-yellow-500" },
    { label: "Re", name: "React", color: "text-cyan-500" },
    { label: "TS", name: "TypeScript", color: "text-blue-500" },
  ],
  aboutMe: {
    title: "Bridging the gap between",
    subTitle: "Design & Deployment",
    titleBio:
      "Full-stack developer combining creative design with robust infrastructure",
    bio: "I’m a passionate developer working at the intersection of frontend engineering and cloud infrastructure. With a strong foundation in ReactJS and modern JavaScript (ES6+), I build scalable, production-ready web applications that are both performant and user-centric.",
    subBio:
      "Beyond the UI, I bring DevOps expertise to ensure reliability and automation across the delivery pipeline. I have hands-on experience with CI/CD pipelines, GitHub Actions, and infrastructure-as-code, along with deploying and managing applications on AWS and GCP. I focus on architecting resilient systems that scale seamlessly from development to production.",
  },
  featureCards: [
    {
      icon: Zap,
      title: "Performance",
      desc: "Obsessed with speed",
      color: "text-yellow-500",
      hoverBorder: "hover:border-yellow-500/50",
    },
    {
      icon: Cpu,
      title: "Automated",
      desc: "CI/CD driven",
      color: "text-sky-400",
      hoverBorder: "hover:border-sky-400/50",
    },
    {
      icon: Globe,
      title: "Scalable",
      desc: "Global architecture",
      color: "text-purple-500",
      hoverBorder: "hover:border-purple-500/50",
    },
  ],

  skills: {
    title: "Technical Arsenal",
    subTitle: "Technologies & Tools",
    titleBio:
      " A comprehensive toolkit spanning full-stack development, cloud infrastructure, and security compliance.",
    languages: ["JavaScript (ES6+)", "Java", "HTML5", "CSS3"],
    frontend: [
      "ReactJS",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "Preline",
      "Cypress",
    ],
    devops: ["GitHub Actions", "Jenkins", "Git", "GitHub", "Docker"],
    cloudAndSec: [
      "AWS",
      "GCP",
      "SonarQube",
      "Checkmarx",
      "Dynatrace",
      "42Crunch",
      "Fossa",
      "Cycode",
    ],
  },
  jobTitles: [
    "ReactJs Developer",
    "Front End Developer",
    "DevOps Engineer",
    "Software Developer",
    "UI/UX Designer",
  ],

  project: {
    title: "Showcase Projects",
    subTitle: "Crafted with Code & Creativity",
    titleBio:
      "Explore my latest work in full-stack development, cloud infrastructure, and modern web technologies",
  },
  projects: [
    {
      id: "1",
      title: "Nebula Dashboard",
      description:
        "A real-time analytics dashboard for cloud metrics using React, D3.js, and WebSockets.",
      tags: ["React", "TypeScript", "D3.js", "AWS Lambda"],
      imageUrl: "https://picsum.photos/600/400?random=1",
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "2",
      title: "KubeDeployer CLI",
      description:
        "Automated CI/CD pipeline generator for Kubernetes clusters using Go and Terraform.",
      tags: ["Go", "Terraform", "Docker", "K8s"],
      imageUrl: "https://picsum.photos/600/400?random=3",
      category: "DevOps",
      githubUrl: "#",
    },
    {
      id: "3",
      title: "E-Commerce Microservices",
      description:
        "Fully containerized e-commerce platform with event-driven architecture.",
      tags: ["Node.js", "RabbitMQ", "Docker Compose", "React"],
      imageUrl: "https://picsum.photos/600/400?random=5",
      category: "Fullstack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "4",
      title: "InfraGuard",
      description:
        "Infrastructure as Code drift detection tool utilizing OPA Policy.",
      tags: ["Python", "OPA", "GitHub Actions"],
      imageUrl: "https://picsum.photos/600/400?random=8",
      category: "DevOps",
      githubUrl: "#",
    },
  ] as Project[],

  experienceBio: {
    title: "Professional Journey",
    subTitle: "Career Path",
    titleBio:
      "A timeline of my contributions to high-impact teams and complex engineering challenges.",
  },
  experience: [
    {
      id: "1",
      role: "ReactJS Developer",
      company: "VML",
      period: "Dec 2023 - Present",
      description: [
        "Developed PDF download & checkout flows with reusable components and Redux",
        "Automated deployments with GitHub Actions & Jenkins, reducing release time by 30%",
        "Integrated security & quality tools into CI/CD pipelines (SonarQube, Checkmarx, Dynatrace, etc.)",
        "Deployed services on GCP Cloud Run and managed assets via Cloud Storage",
      ],
    },
    {
      id: "2",
      role: "Software Engineer",
      company: "Innova Solutions",
      period: "Jun 2022 - Dec 2023",
      description: [
        "Built interactive ReactJS UIs from UX wireframes, boosting user engagement by 20%",
        "Implemented Redux Toolkit for scalable and consistent state management",
        "Deployed applications on AWS EC2, managing assets via S3 and CloudFront",
        "Implemented comprehensive component library with Storybook.",
      ],
    },
    {
      id: "3",
      role: "Technical Associate",
      company: "Genpact",
      period: "Oct 2021 - Jun 2022",
      description: [
        "Designed a user-friendly UI to streamline sales and customer data entry, improving efficiency by 25%",
        "Built a dynamic customer database for managing client details and purchase history",
        "Deployed applications on Apache Tomcat with seamless SQL Server 2020 integration",
        "Collaborated with cross-functional teams to deliver reliable internal tools",
      ],
    },
  ] as Experience[],
  feedBack: {
    title: "What Clients Say",
    subTitle: "Testimonials",
    titleBio: "Real stories from satisfied clients and collaborators",
  },
  testimonials: [
    {
      text: "I hired Dinakaran as a React.js developer, and it quickly became clear he brought more than just strong technical skills — his positive attitude, adaptability, and eagerness to learn stood out from day one. When we needed a DevOps engineer, I gave Dinakaran the opportunity to transition into the role, and he made the switch seamlessly. He quickly got to grips with GitHub Actions, static analysis, and security tools, and consistently delivered high-quality work. He was also highly proactive, reaching out across client teams to identify needs and get things done efficiently. In addition to his technical ability, Dinakaran had excellent client-facing presentation skills. He was confident, clear, and professional in his communication — a real asset in any cross-team or stakeholder-facing context. Dinakaran brings drive, versatility, and professionalism to everything he does. I wouldn’t hesitate to work with him again.",
      author: "Paul Smout",
      role: "Software Technology Director/Technology Manager",
      avatar: userLogo, // replace string path with imported asset
    },
  ],

  contact: {
    title: "Get in Touch",
    subTitle: "Let's Work Together",
    titleBio:
      "I'm excited to collaborate on innovative projects and bring ideas to life.",
    info: "Contact Info",
    gmail: "dannydina28@gmail.com",
    location: "Chennai, India",
  },
  socialLinks: [
    {
      icon: Github,
      href: "https://github.com/Dinakaran-Yogidasan",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dinakarany2899/",
      label: "LinkedIn",
    },
  ],
  footer: {
    credit: "Designed & Built by Dinakaran Yogidasan",
  },
};
