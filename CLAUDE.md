# render_website

## Project Overview
Render Exteriors — exterior cleaning business website (formerly VanDan Power Wash).
Live at: https://renderexteriors.ca

## Stack
Static HTML/CSS/JS — no build tool. Hosted on GitHub Pages.

## File Structure
- `index.html` — homepage (form + Our Services + Why Choose Us)
- `contact.html` — contact page
- `gallery.html` — photo gallery
- `services.html` — services overview
- `services/` — individual service pages (gutter, roof, house, pressure)
- `style-v4.css` — main stylesheet (versioned to bust CDN cache)
- `app.js` — EmailJS form logic (versioned, currently v=5)
- `images/render-logo.png` — current logo (horizontal, 2500x1000)
- `sitemap.xml` — submitted to Google Search Console

## Git / Deploy
- Remote: git@github.com:danielsu-dotcom/danielsu-dotcom.github.io.git
- Branch: main
- SSH key: ~/.ssh/github_render
- Push to deploy (GitHub Pages auto-builds)
- After pushing CSS/JS changes, bump the version suffix (?v=N) to bypass Cloudflare CDN cache

## EmailJS
- Public key: zHgX3Rh4FEUz6nxAH
- Service ID: service_ru22am2 (connected to daniel@renderexteriors.ca Google Workspace)
- Template ID: template_bf6e6uk (sends to daniel@renderexteriors.ca)
- Two functions in app.js: sendMail() for index.html (#contact-form), sendeMail() for contact.html (#form)

## Domain & DNS
- Domain: renderexteriors.ca (registered at WHC — clients.whc.ca)
- DNS: 4 GitHub A records (185.199.108-111.153) + CNAME www → danielsu-dotcom.github.io
- SPF record needed: v=spf1 include:_spf.google.com ~all (fixes Gmail blocking)

## Branding
- Dark charcoal: #1a1a1a
- Teal: #4a8a7a
- Cream: #e8dcc8
- Logo: horizontal layout, house icon + RE monogram + RENDER/EXTERIORS text

## Mobile
- Viewport meta tag added to all pages (was missing — caused all mobile CSS to fail)
- Media query breakpoint: max-width 812px
- Mobile layout: form first, then Our Services section below
- services-content hidden on mobile (display:none in media query)

## Known Issues / To Do
- SPF TXT record not yet added to WHC DNS (needed for Gmail delivery of auto-replies)
- PWA setup (manifest.json + service worker) planned for future
