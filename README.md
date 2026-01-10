# Techversey Portfolio

A modern, production-ready React + Vite portfolio showcasing frontend development and DevOps engineering work. Built with TypeScript, featuring comprehensive SEO, performance monitoring, and optimized for production deployment.

## 🚀 Production Status

✅ **Production Ready** - Fully optimized and ready for deployment  
✅ **Security Hardened** - Environment variables, error boundaries, no vulnerabilities  
✅ **Performance Optimized** - Code splitting, lazy loading, minification  
✅ **SEO Configured** - Comprehensive meta tags, structured data, sitemap

## Features

### Core Features

- ⚡ Modern React 19 with TypeScript
- 🎨 Tailwind CSS 4 for styling
- 🔥 Vite for lightning-fast builds
- 📱 Fully responsive design
- 🌓 Dark/Light theme support
- ♿ Accessibility-first approach

### SEO & Performance

- **Meta Tags**: Comprehensive meta tags in `index.html` for SEO
- **Structured Data**: JSON-LD support for rich snippets
- **Base meta in HTML**: Optimized for search engine crawlers
- **Social previews**: Open Graph & Twitter cards for rich link previews
- **Web Vitals**: Core Web Vitals tracking and monitoring via `web-vitals.ts`
- **Sitemap & Robots**: Configured for search engine optimization

### Production Features

- 🔒 Environment variable management with type safety
- 🛡️ Error boundaries for graceful error handling
- 📦 Optimized code splitting and lazy loading
- 🗜️ Minification with Terser (console.log removal in production)
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
```

## Environment Variables

Create a `.env` file with the following variables:

```env
VITE_SITE_URL=https://techversey.com
VITE_SITE_NAME=Dinakaran Dev
VITE_SITE_DESCRIPTION=Frontend Developer & DevOps Engineer Portfolio
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GA_TRACKING_ID=your_ga_id  # Optional
```

**Important**: Never commit `.env` to version control. Use `.gitignore` to exclude it.

## Project Structure

```
├── public/                  # Static assets
│   ├── sitemap.xml         # SEO sitemap
│   ├── robots.txt          # Crawler configuration
│   └── site.webmanifest    # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   └── ErrorBoundary.tsx
│   ├── data/              # Portfolio data & content
│   │   └── portfolio.ts
│   ├── hooks/             # Custom React hooks
│   │   └── useTheme.ts
│   ├── utils/             # Utility functions
│   │   ├── web-vitals.ts
│   │   ├── seo.ts
│   │   ├── ScrollToTop.tsx
│   │   └── RotatingJobTitle.tsx
│   ├── assets/            # Images & media files
│   ├── types.ts           # TypeScript type definitions
│   ├── index.css          # Global styles
│   ├── main.tsx           # Entry point
│   └── App.tsx            # Root component
├── .github/workflows/      # CI/CD configuration
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies & scripts
├── DEPLOYMENT.md          # Deployment guide
└── README.md              # This file
```

## Core Components

### [`Hero.tsx`](src/components/Hero.tsx)

Landing section with introduction, call-to-action buttons, and animated dashboard preview.

### [`About.tsx`](src/components/About.tsx)

About section with profile image, bio, feature cards, and experience statistics.

### [`Skills.tsx`](src/components/Skills.tsx)

Technical skills organized by categories: Languages, Frontend, DevOps, and Cloud/Security.

### [`Projects.tsx`](src/components/Projects.tsx)

Portfolio projects with filtering, modal preview, and live/source links.

### [`Experience.tsx`](src/components/Experience.tsx)

Professional timeline with job roles, companies, and key accomplishments.

### [`Testimonials.tsx`](src/components/Testimonials.tsx)

Client testimonials with ratings and avatars.

### [`Contact.tsx`](src/components/Contact.tsx)

Contact form with EmailJS integration and submission status feedback.

## Key Utilities

### [`web-vitals.ts`](src/utils/web-vitals.ts)

Monitors Core Web Vitals metrics:

- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Page Load performance

Metrics logged in development; sent to Google Analytics in production.

### [`seo.ts`](src/utils/seo.ts)

SEO utility functions for generating meta descriptions, keywords, and breadcrumb data.

### [`useTheme.ts`](src/hooks/useTheme.ts)

Custom hook for managing dark/light theme with localStorage persistence.

### [`ScrollToTop.tsx`](src/utils/ScrollToTop.tsx)

Floating scroll-to-top button with progress indicator.

### [`RotatingJobTitle.tsx`](src/utils/RotatingJobTitle.tsx)

Animated job title rotation component from portfolio data.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for a comprehensive pre-deployment checklist.

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

#### GitHub Actions

Push to `main` branch - CI/CD pipeline automatically builds and validates.

## SEO Optimization

- ✅ Meta tags configured in [`index.html`](index.html)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags for social media
- ✅ Canonical URL set
- ✅ Structured data in `index.html`
- ✅ Sitemap at [`public/sitemap.xml`](public/sitemap.xml)
- ✅ Robots.txt at [`public/robots.txt`](public/robots.txt)
- ✅ Mobile-friendly responsive design
- ✅ Semantic HTML structure

## Performance Targets

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Bundle size: Optimized with code splitting

## Theme System

The portfolio supports light and dark themes:

- Theme preference persisted to localStorage
- Respects system color scheme preference
- Smooth transitions between themes
- Configured with CSS custom properties in [`index.css`](src/index.css)

## Technologies

- **Framework**: React 19
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 4.1
- **Routing**: React Router DOM 7.10
- **Icons**: Lucide React 0.556
- **Email**: EmailJS Browser 4.4
- **CI/CD**: GitHub Actions

## License

MIT - See LICENSE file for details

## Author

**Dinakaran Yogidasan** - Frontend Developer & DevOps Engineer

- 📧 Email: dannydina28@gmail.com
- 🔗 GitHub: [github.com/Dinakaran-Yogidasan](https://github.com/Dinakaran-Yogidasan)
- 💼 LinkedIn: [linkedin.com/in/dinakarany2899](https://www.linkedin.com/in/dinakarany2899/)
