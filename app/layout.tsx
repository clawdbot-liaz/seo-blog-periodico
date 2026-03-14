import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog SEO Optimizado - Alto Tráfico y Conversión',
  description: 'Blog profesional optimizado para SEO con contenido de calidad para generar tráfico orgánico.',
  keywords: ['blog', 'seo', 'marketing', 'contenido', 'tráfico web'],
  authors: [{ name: 'Tu Nombre' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tudominio.com',
    title: 'Blog SEO Optimizado',
    description: 'Blog profesional optimizado para SEO',
    siteName: 'Blog SEO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog SEO Optimizado',
    description: 'Blog profesional optimizado para SEO',
    creator: '@tucuenta',
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
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}