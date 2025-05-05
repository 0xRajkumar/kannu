import Script from 'next/script';

interface LocalBusinessProps {
  name: string;
  description: string;
  telephone: string;
  email: string;
  address?: string;
  url?: string;
}

export const LocalBusinessStructuredData = ({
  name,
  description,
  telephone,
  email,
  address = "Address, Street, City, State, Country",
  url = "https://www.kannutransport.com"
}: LocalBusinessProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.split(',')[0]?.trim() || "",
      "addressLocality": address.split(',')[1]?.trim() || "",
      "addressRegion": address.split(',')[2]?.trim() || "",
      "addressCountry": address.split(',')[3]?.trim() || "India"
    },
    "url": url,
    "openingHours": "Mo-Su 00:00-23:59", // 24/7 operation
    "sameAs": [
      "https://www.facebook.com/kannutransport", 
      "https://www.twitter.com/kannutransport",
      "https://www.instagram.com/kannutransport"
    ]
  };

  return (
    <Script id="local-business-schema" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};

interface ServiceProps {
  name: string;
  description: string;
  url: string;
  provider: string;
  serviceArea: string;
}

export const ServiceStructuredData = ({
  name,
  description,
  url,
  provider,
  serviceArea
}: ServiceProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider
    },
    "areaServed": serviceArea,
    "url": url
  };

  return (
    <Script id="service-schema" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};