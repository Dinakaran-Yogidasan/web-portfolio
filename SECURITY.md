# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it by emailing the maintainer. Please do not create a public GitHub issue for security vulnerabilities.

## Security Best Practices Implemented

### Environment Variables

- All sensitive data (API keys, tokens) are stored in environment variables
- `.env` file is gitignored to prevent accidental commits
- Environment variables are validated at runtime

### Code Security

- React StrictMode enabled for detecting potential issues
- Error boundaries to catch and handle runtime errors gracefully
- TypeScript strict mode for type safety
- ESLint configured with security-focused rules

### Build Process

- `drop_console` and `drop_debugger` enabled in production builds
- Source maps disabled in production
- Code minification and obfuscation via Terser
- Dependency scanning via npm audit

### Content Security

- Proper meta tags for SEO and social sharing
- `rel="noopener noreferrer"` on external links
- HTTPS enforcement recommended for deployment

## Regular Maintenance

- Keep dependencies updated regularly
- Run `npm audit` to check for vulnerabilities
- Review and update security configurations quarterly
