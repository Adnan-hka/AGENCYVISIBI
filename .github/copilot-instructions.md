# VISIBI Agency Website - AI Development Guide

## Project Overview
VISIBI is a marketing agency website built with React, TypeScript, and Tailwind CSS, focusing on GEO (Generative Engine Optimization), SEO, and PPC services.

## Core Architecture

### Navigation & Routing
- Client-side routing managed in `App.tsx` using state-based navigation
- All navigation handled through `onNavigate` prop pattern
- Page transitions trigger auto-scroll to top via useEffect

### Component Structure
- `Layout.tsx`: Base layout with header, footer, navigation
- `/pages`: Individual page components (Home, Services, GEO, etc.)
- `/ui`: Reusable UI components from shadcn/ui library
- Each page follows consistent pattern: Props interface + functional component

### Key Patterns & Conventions
```typescript
interface PageProps {
  onNavigate: (page: string) => void;
}

export function ExamplePage({ onNavigate }: PageProps) {
  // Page content
}
```

## Development Workflow

### Setup & Running
```bash
npm install          # Install dependencies
npm run dev         # Start dev server
npm run build       # Production build
```

### Component Guidelines
1. Use consistent prop patterns for navigation
2. Maintain mobile-first responsive design
3. Follow established design system (fonts, colors, spacing)
4. Reuse shared components (CTABanner, FAQSection, ServiceCard)

## Common Tasks

### Adding a New Page
1. Create new component in `/pages`
2. Add route in `App.tsx` switch statement
3. Add navigation links in `Layout.tsx`

### Styling
- Use Tailwind classes following established patterns
- Font families: 'Inter' for general text, 'Space Mono' for headings
- Color system: black, white, [#EAEAEA], [#7A7A7A]

### Component Library
- Use `ui/` components from shadcn/ui
- Common components: Button, Accordion, Card
- Icons from Lucide React library

## Deployment
- Configured for Vercel deployment
- Build command: `npm run build`
- Output directory: `dist`
- Base path: `/`

## File Structure Quick Reference
```
src/
├── components/
│   ├── pages/        # Page components
│   ├── ui/           # Shadcn UI components
│   └── Layout.tsx    # Main layout
├── styles/
│   └── globals.css   # Global styles
└── App.tsx          # Main app + routing
```