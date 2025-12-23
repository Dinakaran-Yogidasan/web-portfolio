/**
 * Type definitions for environment variables
 * This provides type safety for import.meta.env usage
 */

interface ImportMetaEnv {
  // Base Vite variables
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;

  // Custom environment variables
  readonly VITE_SITE_URL: string;
  readonly VITE_SITE_NAME: string;
  readonly VITE_SITE_DESCRIPTION: string;

  // EmailJS Configuration
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;

  // Social Media
  readonly VITE_GITHUB_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_TWITTER_URL?: string;

  // Analytics (optional)
  readonly VITE_GA_TRACKING_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
