import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import ScrollProgress from '@/components/navigation/ScrollProgress';

import './globals.css';

config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Senior Software Developer | Backend, DevOps & Deep Learning',
    template: '%s | Senior Software Developer Portfolio',
  },
  description:
    'Portfolio of a Senior Software Developer specializing in Backend Development, DevOps Automation, and Deep Learning solutions. Expert in Python, Go, and Cloud Technologies.',
  keywords: [
    'Software Developer',
    'Backend Development',
    'DevOps',
    'Deep Learning',
    'Python',
    'Go',
    'Cloud Computing',
    'Portfolio',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Senior Software Developer Portfolio',
    title: 'Senior Software Developer | Backend, DevOps & Deep Learning',
    description:
      'Portfolio of a Senior Software Developer specializing in Backend Development, DevOps Automation, and Deep Learning solutions.',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Senior Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Software Developer | Backend, DevOps & Deep Learning',
    description:
      'Portfolio of a Senior Software Developer specializing in Backend Development, DevOps Automation, and Deep Learning solutions.',
    creator: '@yourtwitter',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className="font-sans antialiased"
        data-new-gr-c-s-check-loaded="14.1234.0"
        data-gr-ext-installed=""
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
