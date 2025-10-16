# Downtown Mount Sterling Redevelopment - POC

A proof-of-concept website for the historic redevelopment of three buildings in downtown Mount Sterling, Ohio.

## Features

- **Hero Section**: Compelling project vision and key highlights
- **Property Listings**: 9 properties (3 commercial, 6 residential) with filtering
- **Contact Form**: Validated form with React Hook Form + Zod
- **Responsive Design**: Mobile-first, works on all devices
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Shadcn/ui

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build

```bash
npm run build
npm start
```

## Deployment

### Deploy to Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Deploy!

### Environment Variables

For production, set:
```
NEXT_PUBLIC_SITE_URL=https://downtownmountsterling.com
```

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   ├── hero-section.tsx
│   ├── properties-section.tsx
│   ├── property-card.tsx
│   ├── about-section.tsx
│   └── contact-section.tsx
├── lib/                   # Utilities and data
│   ├── types.ts          # TypeScript types
│   ├── properties.ts     # Property data
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Properties

- 3 Commercial spaces (650-2,100 sq ft, $595-$1,495/mo)
- 1 Historic theater (event space)
- 4 One-bedroom apartments (750 sq ft, $795/mo)
- 2 Two-bedroom apartments (1,100 sq ft, $995/mo)

## POC Success Criteria

- ✅ Single landing page with hero section
- ✅ Property grid showing all 9 spaces
- ✅ Contact form with validation
- ✅ Mobile responsive design
- ✅ Ready to deploy on Render

## Next Steps (Phase 1)

- Add Payload CMS for content management
- Connect PostgreSQL database
- Email integration (Resend/SendGrid)
- Add property photos
- Virtual tour embeds
- SEO optimization
- Analytics setup

## License

Copyright © 2025 Downtown Mount Sterling Redevelopment
