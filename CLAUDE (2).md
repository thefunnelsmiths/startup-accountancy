# Startup Accountancy — Funnel Page

## Stack

- Next.js (static export, Pages Router)  
- Tailwind CSS  
- Deployed to Cloudflare Pages

## Rules

- Always use static export (no SSR, no API routes)  
- Mobile-first — all components built mobile then scaled up  
- Forms POST to GHL webhook URLs via fetch — no GHL iframes  
- Video embeds use lazy load pattern — no iframe until user clicks  
- Keep components in /components, page in /pages/index.tsx  
- No unnecessary dependencies — keep the bundle lean

## Project Structure

```
startupaccountancy/
├── components/
│   ├── VideoEmbed.tsx       # Vimeo lazy load player
│   ├── LeadForm.tsx         # Posts to GHL webhook
│   ├── HeroSection.tsx      # Headline, subheadline, CTA
│   ├── ProofBlock.tsx       # Social proof / testimonials
│   └── UrgencyBar.tsx       # Countdown or urgency message
├── pages/
│   └── index.tsx            # Main landing page
├── public/
│   └── images/              # Logos, thumbnails
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── CLAUDE.md
```

## GHL Integration

- Webhook URL stored in environment variable: NEXT\_PUBLIC\_GHL\_WEBHOOK  
- Forms submit via fetch POST with JSON body  
- Fields: firstName, email, phone  
- On success: show confirmation message, do not redirect  
- Never use GHL iframes or embed scripts

## Video

- All video hosted on Vimeo Pro  
- Use lazy load pattern — render thumbnail \+ play button first  
- Only inject iframe on user click with autoplay=1  
- Vimeo ID stored in page config, not hardcoded in component

## Environment Variables

```
NEXT_PUBLIC_GHL_WEBHOOK=https://services.leadconnectorhq.com/hooks/YOUR_ID
NEXT_PUBLIC_VIMEO_ID=YOUR_VIMEO_ID
```

## Commands

- npm run dev        — local preview at localhost:3000  
- npm run build      — production build (outputs to /out folder)

## Deployment

- Pushes to main branch auto-deploy via Cloudflare Pages  
- Build command: npm run build  
- Build output directory: out  
- Node version: 18

## Style Guidelines

- Font: system font stack or a single Google Font loaded async  
- Colours defined in tailwind.config.js — do not hardcode hex values in components  
- Spacing: use Tailwind utility classes only, no custom CSS unless unavoidable  
- All CTAs use the same primary button style from LeadForm

