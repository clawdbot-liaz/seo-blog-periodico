// Edge function para Netlify - Rewrite para Next.js App Router
export default async (request, context) => {
  const url = new URL(request.url)
  
  // Si es un archivo estático, déjalo pasar
  if (url.pathname.startsWith('/_next/') || 
      url.pathname.startsWith('/static/') ||
      url.pathname.endsWith('.xml') ||
      url.pathname.endsWith('.txt') ||
      url.pathname.endsWith('.ico') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js')) {
    return
  }
  
  // Rewrite todas las rutas a index.html para SPA
  return new Response(null, {
    status: 200,
    headers: {
      'x-rewrite': 'nextjs-app',
      'location': '/index.html'
    }
  })
}