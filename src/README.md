# VISIBI Agency Website

A modern, multi-page website for VISIBI (govisibi.agency) - helping brands appear, get cited, and earn trust in the era of Generative AI search.

## Overview

VISIBI optimizes brand visibility for mentions across ChatGPT, Gemini, and Perplexity through specialized services in GEO (Generative Engine Optimization), SEO, PPC, and proprietary AI visibility tools.

## Design System

### Typography
- **Inter**: Used for H1, buttons, and navigation
- **Space Mono**: Used for H2, H3, and paragraphs

### Color Tokens
- **White**: #FFFFFF
- **Black**: #000000
- **Grey Light**: #EAEAEA
- **Grey Medium**: #7A7A7A

### Components
- Primary CTA buttons: White background, black text, 1px solid black border (inverts on hover)
- Hero sections: Colorful neural network backgrounds with white overlay, black text, 0.10 opacity grayscale filter

## Pages

1. **Home** - Introduction to VISIBI and core value proposition
2. **Services** - Overview of all services
3. **GEO** - Generative Engine Optimization service details
4. **SEO** - SEO & Content service details
5. **PPC** - Paid Media service details
6. **VISIBI Tool** - Proprietary visibility tracking tool
7. **How We Work** - Process and methodology
8. **About** - Company information and team
9. **Insights** - Blog and resources
10. **Contact** - Contact form and information

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library
- **Lucide React** - Icons

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/visibi-website.git

# Navigate to project directory
cd visibi-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## Project Structure

```
├── App.tsx                 # Main application component with routing
├── components/
│   ├── Layout.tsx         # Header, footer, and navigation
│   ├── CTABanner.tsx      # Call-to-action banner component
│   ├── FAQSection.tsx     # FAQ accordion component
│   ├── ServiceCard.tsx    # Service card component
│   ├── pages/             # Individual page components
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── GEOPage.tsx
│   │   ├── SEOPage.tsx
│   │   ├── PPCPage.tsx
│   │   ├── ToolPage.tsx
│   │   ├── HowWeWorkPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── InsightsPage.tsx
│   │   └── ContactPage.tsx
│   └── ui/                # Shadcn UI components
└── styles/
    └── globals.css        # Global styles and design tokens
```

## Features

- ✅ Fully responsive design
- ✅ Multi-page navigation
- ✅ Service-specific landing pages
- ✅ Contact forms
- ✅ FAQ sections
- ✅ Blog/insights section
- ✅ Consistent design system
- ✅ Accessibility-focused components

## Deployment

This site can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the build directory
```

### GitHub Pages
Update `package.json` with homepage and deploy scripts, then:
```bash
npm run deploy
```

## Contributing

This is a proprietary project for VISIBI Agency. For inquiries, contact hello@govisibi.agency

## License

Copyright © 2025 VISIBI. All rights reserved.

## Contact

- Website: [govisibi.agency](https://govisibi.agency)
- Email: hello@govisibi.agency
