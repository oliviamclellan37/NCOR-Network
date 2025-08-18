// src/pages/events/stids2025.js
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import STIDS2025Hero from '@site/src/components/EventPages/STIDS2025/Hero';
import Overview from '@site/src/components/EventPages/STIDS2025/Overview';
import CallForPapers from '@site/src/components/EventPages/STIDS2025/CallForPapers';
import Speakers from '@site/src/components/EventPages/STIDS2025/Speakers';
import ImportantDates from '@site/src/components/EventPages/STIDS2025/ImportantDates';
import Registration from '@site/src/components/EventPages/STIDS2025/Registration';
import ContactForm from '@site/src/components/EventPages/STIDS2025/ContactForm';

const SEO = {
  title: 'STIDS 2025 – Semantic Technologies for Intelligence, Defense, and Security',
  description:
    'Join us for the International Conference on Semantic Technologies for Intelligence, Defense, and Security (STIDS 2025), co-hosted with KGOIDS and the DOD-IC Ontology Working Group. November 17–19, 2025.',
  url: 'https://ncor-network.org/events/stids2025',
  image: '/img/stids2025-banner.png',
  keywords: [
    'STIDS 2025',
    'semantic technologies',
    'intelligence',
    'defense',
    'security',
    'ontology',
    'knowledge graphs',
    'NCOR',
  ],
};

function JsonLdEvent() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'STIDS 2025',
    url: SEO.url,
    startDate: '2025-11-17',
    endDate: '2025-11-19',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'George Mason University',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
    },
    image: [`https://ncor-network.org${SEO.image}`],
    description: SEO.description,
    organizer: {
      '@type': 'Organization',
      name: 'NCOR Network',
      url: 'https://ncor-network.org',
    },
  };
  return <script type="application/ld+json">{JSON.stringify(json)}</script>;
}

export default function STIDS2025() {
  return (
    <Layout title={SEO.title} description={SEO.description}>
      <Head>
        {/* Canonical */}
        <link rel="canonical" href={SEO.url} />

        {/* Basic SEO */}
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords.join(', ')} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:url" content={SEO.url} />
        <meta property="og:image" content={`https://ncor-network.org${SEO.image}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={`https://ncor-network.org${SEO.image}`} />

        {/* Schema.org JSON-LD */}
        <JsonLdEvent />
      </Head>

      <STIDS2025Hero />
      <Overview />
      <CallForPapers />
      <Speakers />
      <ImportantDates />
      <Registration />
      <ContactForm />
    </Layout>
  );
}
