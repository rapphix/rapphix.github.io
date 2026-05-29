interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function generateSEOMetadata(seo: SEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rapphix.me';
  
  return {
    title: `${seo.title} | Portfolio`,
    description: seo.description,
    keywords: [
      'portfolio',
      'developer',
      'full stack',
      'web development',
      'React',
      'Next.js',
      'TypeScript',
    ],
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: seo.url || baseUrl,
      title: seo.title,
      description: seo.description,
      siteName: 'Portfolio',
      images: [
        {
          url: seo.image || `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.image || `${baseUrl}/og-image.jpg`],
      creator: '@yourhandle',
    },
  };
}

export function generateJSONLD(data: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: 'https://rapphix.me',
    email: 'your@email.com',
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourprofile',
      'https://twitter.com/yourhandle',
    ],
    ...data,
  };
}
