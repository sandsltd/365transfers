# 365 Transfers Website

A modern, SEO-optimized website for 365 Transfers taxi company built with Next.js and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **SEO Optimized** with proper metadata
- **Contact Form** with email integration
- **Responsive Design** for all devices

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

1. Copy `env.local.example` to `.env.local`:
```bash
cp env.local.example .env.local
```

2. Fill in your email configuration in `.env.local`:
   - `SMTP_HOST`: Your SMTP server (e.g., smtp.gmail.com)
   - `SMTP_PORT`: SMTP port (usually 587 for TLS)
   - `SMTP_USER`: Your email address
   - `SMTP_PASSWORD`: Your email password or app password
   - `CONTACT_EMAIL`: Email address to receive contact form submissions

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
365transfers/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── contact/
│   │   └── page.tsx               # Contact page
│   ├── globals.css                # Global styles with Tailwind
│   ├── layout.tsx                 # Root layout with SEO metadata
│   └── page.tsx                   # Home page
├── public/                        # Static assets (logo, images)
├── .env.local                     # Environment variables (not in git)
└── package.json
```

## Adding Your Logo

Place your logo file in the `public/` directory as either:
- `logo.png`
- `logo.svg`

Then update the logo references in:
- `app/page.tsx` (home page navigation)
- `app/contact/page.tsx` (contact page navigation)

## Color Scheme

- **Primary Blue**: `#001E73`
- **Accent Green**: `#C2FE58`
- **White**: Standard white

These colors are configured in `tailwind.config.ts` and can be used as:
- `bg-primary`, `text-primary`
- `bg-accent`, `text-accent`

## SEO Features

- Proper meta tags and Open Graph tags
- Semantic HTML structure
- Optimized page titles and descriptions
- Robot-friendly configuration

## Contact Form

The contact form sends emails using SMTP. Make sure to:
1. Configure your email service in `.env.local`
2. For Gmail, use an App Password (not your regular password)
3. The email sending implementation in `app/api/contact/route.ts` needs to be completed with your preferred email service (nodemailer, Resend, SendGrid, etc.)

## License

© 2024 365 Transfers. All rights reserved.

