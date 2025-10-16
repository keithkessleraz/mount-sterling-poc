# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Mount Sterling downtown redevelopment website project - a Next.js application for showcasing commercial and residential properties in a historic building redevelopment in Mount Sterling, Ohio.

## Technical Stack

**Frontend:**
- Next.js 14 (App Router)
- Tailwind CSS + Shadcn/ui components
- React Hook Form + Zod validation
- TypeScript

**Backend:**
- Payload CMS 2.0 for content management
- PostgreSQL database
- Resend/SendGrid for email
- Cloudinary for file storage

**Deployment:**
- Render (app + database)
- GitHub Actions for CI/CD

## Development Commands

Since this is a new project, use these commands based on the PRD specifications:

```bash
# Initial setup (if starting from scratch)
npx create-next-app@latest . --typescript --tailwind
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install react-hook-form @hookform/resolvers zod lucide-react

# Shadcn/ui setup
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card form input

# For full project with Payload CMS
npx create-payload-app@latest . --template=next
npm install @react-email/components resend embla-carousel-react mapbox-gl

# Standard development commands
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript checks
```

## Architecture & Data Models

### Core Content Types (Payload CMS)

**Property Schema:**
- Type: commercial | residential
- Square footage, monthly rent, status
- Images, floor plans, virtual tour URLs
- Combinable spaces support

**Event Schema:**
- Community events, construction updates
- Category: community | construction | tenant
- RSVP functionality

**Business Directory Schema:**
- Local business listings
- Tenant vs. community business distinction

**Lead Capture Schema:**
- Property interest tracking
- Multiple contact sources

## Key Features

### Phase 0 (POC - 24 hours)
- Single landing page with hero section
- Property grid (3 commercial, 6 residential spaces)
- Basic contact form
- Mobile responsive

### Phase 1 (MVP - Week 1-2)
- Property listings with admin interface
- Lead capture and tour scheduling
- Email newsletter signup

### Phase 2 (Full Launch - Week 3-4)
- Floor plans and virtual tours
- Event calendar and business directory
- SEO optimization and analytics

## Property Details

**Commercial Spaces:**
- Space A: 650 sq ft - $595/month
- Space B: 1,200 sq ft - $995/month  
- Space C: 2,100 sq ft - $1,495/month
- Theater: Event space with stage

**Residential Spaces:**
- 1BR Units (4): 750 sq ft - $795/month
- 2BR Units (2): 1,100 sq ft - $995/month

## Environment Variables

```env
RESEND_API_KEY=your_key
NEXT_PUBLIC_SITE_URL=https://downtownmountsterling.com
DATABASE_URL=postgresql://...
PAYLOAD_SECRET=your_secret
CLOUDINARY_URL=cloudinary://...
```

## Deployment

- **Platform:** Render (both app and PostgreSQL database)
- **Domain:** downtownmountsterling.com
- **Build Command:** `npm run build`
- **Start Command:** `npm start`

## Design Principles

- Historic meets modern aesthetic
- Mobile-first responsive design
- High-quality photography focus
- Community-centered messaging
- Clear CTAs throughout

## Notes

- Below-market rents with owner support model
- Historic building preservation focus
- Community engagement is key to success
- Phased development approach for quick ROI