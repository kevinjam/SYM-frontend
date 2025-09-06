# Sym Health App - Landing Page

A modern, responsive landing page for the Sym health app built with Next.js 14, Tailwind CSS, and Shadcn UI components.

## Features

- **Modern Design**: Clean, professional design optimized for the US healthcare market
- **Responsive**: Fully responsive design that works on mobile, tablet, and desktop
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **HIPAA Compliant Messaging**: Trust indicators and security-focused content
- **Smooth Animations**: CSS animations and smooth scrolling for better UX
- **Newsletter Signup**: Ready for Mailchimp integration
- **App Store Links**: Direct links to iOS and Android app downloads

## Sections

1. **Hero Section** - App name, tagline, and primary CTA
2. **Features Section** - Key app features with icons and descriptions
3. **About Section** - Company information and trust indicators
4. **Testimonials** - User and healthcare professional testimonials
5. **FAQ** - Common questions and answers
6. **CTA Section** - App download and beta signup
7. **Footer** - Links, privacy policy, and social media

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Components**: Shadcn UI components
- **Icons**: Lucide React
- **Animations**: Framer Motion and CSS animations
- **TypeScript**: Full TypeScript support

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys and URLs in `.env.local`

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `MAILCHIMP_API_KEY` - For newsletter signup functionality
- `MAILCHIMP_AUDIENCE_ID` - Your Mailchimp audience ID
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID
- `NEXT_PUBLIC_IOS_APP_URL` - iOS App Store URL
- `NEXT_PUBLIC_ANDROID_APP_URL` - Google Play Store URL
- `NEXT_PUBLIC_MARKETING_URL` - Main marketing website URL
- `NEXT_PUBLIC_PRIVACY_URL` - Privacy policy URL
- `NEXT_PUBLIC_TERMS_URL` - Terms of service URL

## Customization

### Colors
The app uses a blue and cyan color scheme optimized for healthcare. You can customize colors in `tailwind.config.js`.

### Content
All content is easily customizable in the component files:
- Hero content: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Testimonials: `components/Testimonials.tsx`
- FAQ: `components/FAQ.tsx`

### Images
Add your app screenshots and logos to the `public` folder and update the image references in the components.

## Deployment

This project is ready to deploy on Vercel, Netlify, or any other Next.js hosting platform.

### Vercel Deployment
```bash
npm run build
```

### Environment Variables for Production
Make sure to set all environment variables in your hosting platform's dashboard.

## SEO Optimization

The landing page includes:
- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data for better search engine understanding
- Optimized images and performance

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly

## Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal JavaScript bundle size
- CSS animations for smooth interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary to Sym Health Technologies, Inc.

## Support

For questions or support, contact the development team or visit [symhealth.com/help](https://symhealth.com/help).
