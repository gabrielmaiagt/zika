import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ogImage = PlaceHolderImages.find(img => img.id === 'og-image');

export const metadata: Metadata = {
  title: 'Pack de Edição Grau CapCut — Templates e Efeitos • R$9,90',
  description: 'Viralize seus vídeos de grau em minutos. +30 templates, efeitos de impacto, áudios, legendas, molduras e tutorial. Acesso vitalício por R$9,90.',
  openGraph: {
    title: 'Pack de Edição Grau CapCut — Templates e Efeitos • R$9,90',
    description: 'Viralize seus vídeos de grau em minutos. +30 templates, efeitos de impacto, áudios, legendas, molduras e tutorial. Acesso vitalício por R$9,90.',
    url: 'https://seu-site.com', // Replace with your actual domain
    siteName: 'Grau Viral Pack',
    images: [
      {
        url: ogImage?.imageUrl || 'https://picsum.photos/seed/grauviral/1200/630',
        width: 1200,
        height: 630,
        alt: 'Pack de Edição Grau CapCut',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Pack de Edição Grau CapCut',
    description: 'Viralize seus vídeos de grau em minutos. +30 templates, efeitos de impacto, áudios, legendas, molduras e tutorial.',
    image: ogImage?.imageUrl || 'https://picsum.photos/seed/grauviral/1200/630',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: '9.90',
      availability: 'https://schema.org/InStock',
      url: '#checkout',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2500'
    }
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-[radial-gradient(ellipse_at_center,_#120909_0%,_#0B0A0A_70%)] text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
