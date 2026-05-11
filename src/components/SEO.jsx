import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, schemaData }) => {
  const siteTitle = "KM Title Insurance";
  const defaultDescription = "Trusted Title Insurance services in North Carolina and Nationwide. Protecting homeowners, buyers, and lenders with fast, accurate, and professional title searches.";
  const defaultKeywords = "title insurance North Carolina, title insurance NC, residential title insurance, commercial title insurance USA, real estate closing support, title search services";
  
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Secure Your Property Future`;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;

  // Default JSON-LD Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "KM Title Insurance",
    "image": "https://kmtitleinsurance.com/logo.png", // Replace with real URL if deployed
    "@id": "https://kmtitleinsurance.com",
    "url": "https://kmtitleinsurance.com",
    "telephone": "+14707065858",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NC",
      "addressCountry": "US"
    },

    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/kmtitle",
      "https://www.linkedin.com/company/kmtitle"
    ]
  };

  const finalSchema = schemaData || defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
