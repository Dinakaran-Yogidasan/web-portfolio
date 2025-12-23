import React from "react";
import { Helmet } from "react-helmet-async";
import { portfolioData } from "../../data/portfolio";

const StructuredData: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.title,
    description: portfolioData.bio,
    url: "https://techversey.com",
    sameAs: [
      "https://github.com/dinakaran-dev",
      "https://linkedin.com/in/dinakaran-dev",
      "https://twitter.com/dinakaran-dev",
    ],
    knowsAbout: [
      ...portfolioData.skills.languages,
      ...portfolioData.skills.frontend,
      ...portfolioData.skills.devops,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dinakaran Dev Portfolio",
    url: "https://techversey.com",
    description:
      "Professional portfolio showcasing frontend development and DevOps engineering projects",
    author: {
      "@type": "Person",
      name: portfolioData.name,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dinakaran Dev - Web Development Services",
    description: portfolioData.bio,
    url: "https://techversey.com",
    priceRange: "$$",
    areaServed: "Worldwide",
    serviceType: [
      "Frontend Development",
      "DevOps Engineering",
      "Web Application Development",
      "CI/CD Pipeline Setup",
      "Cloud Infrastructure",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
