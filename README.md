# Techversey Portfolio

A modern, production-ready React + Vite portfolio showcasing frontend development and DevOps engineering work. Built with TypeScript, featuring comprehensive SEO, performance monitoring, and optimized for production deployment.

## 🚀 Production Status

✅ **Production Ready** - Fully optimized and ready for deployment  
✅ **Security Hardened** - Environment variables, error boundaries, no vulnerabilities  
✅ **Performance Optimized** - Code splitting, lazy loading, minification  
✅ **SEO Configured** - Comprehensive meta tags, structured data, sitemap

See [PRODUCTION_READINESS_REPORT.md](PRODUCTION_READINESS_REPORT.md) for detailed status.

## Features

### Core Features

- ⚡ Modern React 19 with TypeScript
- 🎨 Tailwind CSS 4 for styling
- 🔥 Vite for lightning-fast builds
- 📱 Fully responsive design
- 🌓 Dark/Light theme support
- ♿ Accessibility-first approach

### SEO & Performance

- **Helmet-based meta**: Dynamic `<title>`, description, keywords, canonical, Open Graph, and Twitter tags via `react-helmet-async`
- **Structured Data**: JSON-LD for `Person`, `WebSite`, and `ProfessionalService` schemas
- **Base meta in HTML**: Fallback meta tags in `index.html` for crawlers
- **Social previews**: OG/Twitter cards for rich link previews
- **Web Vitals**: Core Web Vitals tracking and monitoring
- **Sitemap & Robots**: Configured for search engine optimization

### Production Features

- 🔒 Environment variable management
- 🛡️ Error boundaries for graceful error handling
- 📦 Optimized code splitting and lazy loading
- 🗜️ Minification with Terser (console.log removal)
- 🎯 CI/CD ready with GitHub Actions
- 🔐 Security audit passed (0 vulnerabilities)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Security audit
npm audit
npm run audit:fix
```

## Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Build with bundle analysis
npm run build:analyze
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_SITE_URL=https://techversey.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GA_TRACKING_ID=your_ga_id  # Optional
```

**Important**: Never commit `.env` to version control.

## SEO Usage

### Global SEO

Global defaults are applied in [src/App.tsx](src/App.tsx) using:

- [src/components/seo/SEO.tsx](src/components/seo/SEO.tsx) - Meta tags
- [src/components/seo/StructuredData.tsx](src/components/seo/StructuredData.tsx) - JSON-LD

### Per-Page SEO

See examples in [src/components/seo/SEOExamples.tsx](src/components/seo/SEOExamples.tsx):

```tsx
// Example: Projects page SEO
import { ProjectsPageSEO } from "./components/seo/SEOExamples";

export const Projects: React.FC = () => (
  <section id="projects">
    <ProjectsPageSEO />
    {/* ...projects content... */}
  </section>
);
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for comprehensive deployment checklist.

### Quick Deploy

#### Netlify

```bash
npm run build
# Deploy dist folder to Netlify
# Set environment variables in Netlify dashboard
```

#### Vercel

```bash
npm run build
# Deploy dist folder to Vercel
# Set environment variables in Vercel dashboard
```

#### GitHub Pages

Push to main branch - CI/CD pipeline will auto-deploy.

## Project Structure

```
├── public/              # Static assets
│   ├── sitemap.xml     # SEO sitemap
│   ├── robots.txt      # Crawler configuration
│   └── site.webmanifest # PWA manifest
├── src/
│   ├── components/     # React components
│   │   ├── seo/       # SEO-related components
│   │   └── ui/        # Reusable UI components
│   ├── data/          # Portfolio data
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   └── types.ts       # TypeScript types
├── .env.example       # Environment variables template
├── DEPLOYMENT.md      # Deployment guide
├── SECURITY.md        # Security policy
└── PRODUCTION_READINESS_REPORT.md  # Production status
```

## Web Vitals Monitoring

Core Web Vitals tracked via [src/utils/web-vitals.ts](src/utils/web-vitals.ts):

- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Page Load metrics

Metrics are logged in development. For production analytics:

1. Set `VITE_GA_TRACKING_ID` in environment variables
2. Analytics automatically enabled in production builds

## Customization

1. **Site metadata**: Update [src/components/seo/SEO.tsx](src/components/seo/SEO.tsx)
2. **Portfolio data**: Edit [src/data/portfolio.ts](src/data/portfolio.ts)
3. **Structured data**: Modify [src/components/seo/StructuredData.tsx](src/components/seo/StructuredData.tsx)
4. **Base HTML**: Edit [index.html](index.html) for critical resources

## Technologies

- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4
- react-router-dom 7
- react-helmet-async
- EmailJS
- Lucide React icons

## License

MIT
