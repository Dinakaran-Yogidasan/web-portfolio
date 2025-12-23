import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Dinakaran Dev - Frontend Developer & DevOps Engineer | Portfolio",
  description = "Portfolio of Dinakaran Dev - Frontend Developer & DevOps Engineer specializing in React, AWS, CI/CD pipelines, and cloud infrastructure. Building high-performance web applications.",
  keywords = "Frontend Developer, DevOps Engineer, React Developer, AWS, CI/CD, JavaScript, TypeScript, Portfolio, Web Developer, Cloud Infrastructure",
  image = "https://techversey.com/og-image.jpg",
  url = "https://techversey.com/",
  type = "website",
  author = "Dinakaran Dev",
}) => {
  const fullTitle = title.includes("Dinakaran Dev")
    ? title
    : `${title} | Dinakaran Dev`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
