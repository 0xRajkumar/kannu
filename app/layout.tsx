import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';
import { LocalBusinessStructuredData } from '@/components/seo/structured-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Kannu Transport and Travels',
    template: '%s | Kannu Transport and Travels'
  },
  description: 'Providing reliable bus and truck transportation services across India.',
  keywords: ['transport', 'travel', 'bus service', 'truck service', 'logistics', 'transportation'],
  metadataBase: new URL('https://kannutransport.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kannutransport.com/',
    siteName: 'Kannu Transport and Travels',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kannu Transport and Travels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kannu Transport and Travels',
    description: 'Reliable transportation services across India',
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LocalBusinessStructuredData
          name="Kannu Transport and Travels"
          description="Providing reliable bus and truck transportation services across India."
          telephone="+91 98702 51809"
          email="contact@0xrajkumar.com"
        />
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}