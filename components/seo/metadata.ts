import { Metadata } from 'next';

// Default metadata
const defaultMetadata: Metadata = {
  title: {
    default: 'Kannu Transport and Travels',
    template: '%s | Kannu Transport and Travels'
  },
  description: 'Providing reliable bus and truck transportation services across India.',
  keywords: ['transport', 'travel', 'bus service', 'truck service', 'logistics', 'transportation'],
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

// Home page metadata
export const homeMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Reliable Bus & Truck Services | Kannu Transport and Travels',
  description: 'Kannu Transport and Travels provides reliable bus and truck transportation services across India. Book your journey or logistics solution today.',
  keywords: [...defaultMetadata.keywords as string[], 'passenger transport', 'goods transport', 'Delhi bus service', 'PAN India truck service'],
};

// Bus services metadata
export const busMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Bus Services | Delhi to Agra, Mathura, Lucknow',
  description: 'Comfortable and reliable bus services from Delhi to Faridabad, Ballabhgarh, Mathura, Agra, Lucknow, Sultanpur, Badlapur, and Jaunpur.',
  keywords: [...defaultMetadata.keywords as string[], 'Delhi to Agra bus', 'Delhi to Mathura bus', 'Delhi to Lucknow bus', 'bus booking', 'passenger travel'],
};

// Truck services metadata
export const truckMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Nationwide Truck Services | PAN India Coverage',
  description: 'Comprehensive truck transportation and logistics services available across PAN India with reliable and timely delivery.',
  keywords: [...defaultMetadata.keywords as string[], 'truck logistics', 'goods transport', 'PAN India truck', 'freight services', 'commercial transport'],
};

// About page metadata
export const aboutMetadata: Metadata = {
  ...defaultMetadata,
  title: 'About Us | Our Journey and Values',
  description: 'Learn about Kannu Transport and Travels, our history, mission, values, and commitment to providing excellent transportation services.',
  keywords: [...defaultMetadata.keywords as string[], 'transport company', 'about Kannu', 'transport history', 'company values'],
};

// Facilities page metadata
export const facilitiesMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Facilities | Modern Fleet & Services',
  description: 'Explore the modern facilities and services offered by Kannu Transport and Travels for both bus passengers and truck logistics.',
  keywords: [...defaultMetadata.keywords as string[], 'transport facilities', 'modern fleet', 'passenger amenities', 'logistics services'],
};

// Gallery page metadata
export const galleryMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Gallery | Our Fleet and Services',
  description: 'View our gallery showcasing Kannu Transport and Travels fleet of buses and trucks providing reliable services across India.',
  keywords: [...defaultMetadata.keywords as string[], 'transport gallery', 'bus images', 'truck images', 'fleet photos'],
};

// Contact page metadata
export const contactMetadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us | Get in Touch',
  description: 'Contact Kannu Transport and Travels for bus bookings, truck logistics services, or any inquiries about our transportation solutions.',
  keywords: [...defaultMetadata.keywords as string[], 'contact transport company', 'bus booking inquiry', 'truck service contact', 'transport phone number'],
};