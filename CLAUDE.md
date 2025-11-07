# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pandora Experience is a modern landing page built with Next.js 15 and TypeScript for a transformational ice immersion experience event. The site is designed for high conversion with comprehensive marketing integrations.

## Development Commands

### Common Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Docker Development
- `docker build -t pandora-landing .` - Build Docker image
- `docker run -p 3000:3000 pandora-landing` - Run container

## Architecture & Key Files

### Core Structure
```
app/
├── components/
│   ├── sections/     # Page sections (Hero, Benefits, Price, etc.)
│   ├── layout/       # Header, Footer components
│   └── ui/           # Reusable UI components
├── lib/              # Utility functions
├── types/            # TypeScript definitions
├── variables/        # Configuration variables
└── api/              # API routes for registration and lead saving
```

### Configuration Files
- `app/variables/index.ts` - Central configuration for event details, pricing, contacts, and API keys
- `tailwind.config.ts` - Custom color scheme and animations for the ice/transformative theme
- `app/layout.tsx` - Root layout with comprehensive analytics (GA, FB Pixel, Hotjar)

### Key Features
- **Event Management**: Configurable event dates, pricing, and early bird promotions
- **Payment Integration**: Wompi payment gateway with promotional pricing
- **Lead Capture**: URL parameter tracking and lead saving via `/api/save-lead`
- **Marketing Integrations**: MailerLite, Facebook Pixel, Google Analytics, Hotjar
- **Responsive Design**: Mobile-first with Tailwind CSS and custom animations

## Important Patterns

### Centralized Configuration
All event details, pricing, contact info, and API configurations are centralized in `app/variables/index.ts`. This is the single source of truth for the application.

### Component Structure
- Section components in `app/components/sections/` handle specific page areas
- UI components in `app/components/ui/` are reusable across sections
- Layout components provide consistent header/footer

### API Integration
- `/api/register` - Handle user registration and payment processing
- `/api/save-lead` - Save lead parameters from URL query strings
- Environment variables for API keys (NEXT_PUBLIC_* prefix for client-side access)

### Styling System
- CSS custom properties for brand colors (defined in global.css)
- Tailwind classes reference these custom properties
- Custom animations for breathing, floating, and shimmer effects

## Development Notes

- The project uses Next.js 15 with App Router
- All components are client-side ('use client') due to interactive features
- TypeScript is strictly typed with custom interfaces in `app/types/`
- Images and static assets are in `public/` directory
- The build process creates optimized production builds with Docker support