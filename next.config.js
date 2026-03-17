/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify necesita 'export' para static hosting
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Netlify funciona mejor con trailing slash
  trailingSlash: true,
}

module.exports = nextConfig