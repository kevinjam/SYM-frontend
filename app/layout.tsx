import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sym - Your Personal Health Companion',
  description: 'Take control of your health journey with intelligent symptom tracking, medication management, and personalized health insights. HIPAA compliant and trusted by healthcare professionals.',
  keywords: 'health app, symptom tracking, medication management, health companion, HIPAA compliant, healthcare, wellness',
  authors: [{ name: 'Sym Health Technologies' }],
  creator: 'Sym Health Technologies',
  publisher: 'Sym Health Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://symhealth.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sym - Your Personal Health Companion',
    description: 'Take control of your health journey with intelligent symptom tracking, medication management, and personalized health insights.',
    url: 'https://symhealth.com',
    siteName: 'Sym Health',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sym Health App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sym - Your Personal Health Companion',
    description: 'Take control of your health journey with intelligent symptom tracking, medication management, and personalized health insights.',
    images: ['/og-image.png'],
    creator: '@symhealth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sym Health" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
