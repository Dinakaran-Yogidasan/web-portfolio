/**
 * SEO Utilities for improving search engine optimization
 */

/**
 * Generate meta description from content
 */
export const generateMetaDescription = (
  text: string,
  maxLength = 160
): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
};

/**
 * Generate keywords from tags/skills
 */
export const generateKeywords = (items: string[]): string => {
  return items.join(", ");
};

/**
 * Format title for SEO (add site name, limit length)
 */
export const formatTitle = (
  title: string,
  siteName = "Dinakaran Dev"
): string => {
  const maxLength = 60;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  if (fullTitle.length <= maxLength) return fullTitle;
  return fullTitle.substring(0, maxLength - 3) + "...";
};

/**
 * Get current page URL
 */
export const getCurrentUrl = (path = ""): string => {
  const baseUrl = "https://techversey.com";
  return `${baseUrl}${path}`;
};

/**
 * Generate image URL for social sharing
 */
export const getImageUrl = (imagePath = "/og-image.jpg"): string => {
  const baseUrl = "https://techversey.com";
  return `${baseUrl}${imagePath}`;
};

/**
 * Clean text for SEO (remove special characters, extra spaces)
 */
export const cleanText = (text: string): string => {
  return text
    .replace(/\s+/g, " ")
    .replace(/[^\w\s-]/gi, "")
    .trim();
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbs = (paths: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: paths.map((path, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: path.name,
      item: path.url,
    })),
  };
};
