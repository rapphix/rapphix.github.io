import type { Metadata } from 'next';
import { Navbar } from '@/components';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { generateSEOMetadata, generateJSONLD } from '@/lib/seo';
import '@/styles/globals.css';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Full Stack Developer Portfolio',
  description: 'Explore my professional portfolio. I build beautiful, responsive web applications with modern technologies like React, Next.js, and TypeScript.',
  image: 'https://rapphix.me/og-image.jpg',
  url: 'https://rapphix.me',
}) as Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateJSONLD({
    description: 'Full Stack Developer specializing in modern web technologies',
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://rapphix.me" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-white dark:bg-primary text-gray-900 dark:text-white transition-colors">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
