import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookiesPopup from '@/components/CookiesPopup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EL INFORMADOR - Periódico Digital',
  description: 'Periódico digital especializado en noticias de última hora, esports, deportes, cultura influencer/pop y tecnología.',
  keywords: ['noticias', 'última hora', 'esports', 'deportes', 'influencer', 'tecnología', 'periódico digital', 'actualidad'],
  authors: [
    { name: 'María Rodríguez' },
    { name: 'Javi Espartano' },
    { name: 'Ana López' },
    { name: 'Carlos Méndez' },
    { name: 'David Chen' }
  ],
  metadataBase: new URL('https://elinformador.es'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://elinformador.es',
    title: 'EL INFORMADOR - Periódico Digital',
    description: 'Periódico digital especializado en noticias de última hora, esports, deportes, cultura influencer/pop y tecnología.',
    siteName: 'EL INFORMADOR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EL INFORMADOR - Periódico Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EL INFORMADOR - Periódico Digital',
    description: 'Periódico digital especializado en noticias de última hora, esports, deportes, cultura influencer/pop y tecnología.',
    creator: '@elinformador_es',
    images: ['/twitter-image.png'],
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
    google: 'google-site-verification-code', // Añadir código real
  },
  alternates: {
    canonical: 'https://elinformador.es',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookiesPopup />
        <Analytics />
      </body>
    </html>
  )
}