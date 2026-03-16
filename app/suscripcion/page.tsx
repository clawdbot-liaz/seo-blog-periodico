import NewsletterForm from '@/components/NewsletterForm'
import { Check, Shield, Zap, Users, BarChart, Globe } from 'lucide-react'

export default function SuscripcionPage() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Contenido Exclusivo',
      description: 'Acceso anticipado a estudios, análisis en profundidad y tendencias del sector.'
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Datos y Estadísticas',
      description: 'Informes detallados con métricas reales y casos de estudio verificados.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Comunidad Premium',
      description: 'Acceso a webinars, networking con expertos y foros exclusivos.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Cobertura Global',
      description: 'Análisis de mercados internacionales y tendencias globales.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Garantía de Calidad',
      description: 'Contenido verificado por expertos y actualizado constantemente.'
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: 'Sin Compromiso',
      description: 'Cancela cuando quieras. Sin preguntas, sin complicaciones.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-serif mb-6">SUSCRIPCIÓN PREMIUM</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Accede al conocimiento que impulsa el éxito en el mundo digital. 
            Información exclusiva, análisis profundo y herramientas para tomar mejores decisiones.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span>+5,000 suscriptores</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span>98% satisfacción</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-400" />
              <span>Garantía 30 días</span>
            </div>
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">¿QUÉ OBTIENES CON TU SUSCRIPCIÓN?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Más que un newsletter. Una herramienta de crecimiento profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparativa de planes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">COMPARA NUESTROS PLANES</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold">CARACTERÍSTICAS</th>
                  <th className="text-center py-4 px-6 font-bold bg-gray-50 rounded-tl-lg">GRATIS</th>
                  <th className="text-center py-4 px-6 font-bold bg-red-50 text-red-700 rounded-tr-lg">PREMIUM</th>
                  <th className="text-center py-4 px-6 font-bold bg-gray-50">EMPRESA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Newsletter semanal</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6 bg-red-50">✓✓</td>
                  <td className="text-center py-4 px-6">✓✓✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Análisis exclusivos</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6 bg-red-50">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Webinars mensuales</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6 bg-red-50">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Base de datos</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6 bg-red-50">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Soporte prioritario</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6 bg-red-50">✓</td>
                  <td className="text-center py-4 px-6">✓✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Usuarios simultáneos</td>
                  <td className="text-center py-4 px-6">1</td>
                  <td className="text-center py-4 px-6 bg-red-50">1</td>
                  <td className="text-center py-4 px-6">Hasta 5</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6">Consultoría</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6 bg-red-50">-</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">PRECIO</td>
                  <td className="text-center py-4 px-6">
                    <div className="text-2xl font-bold">Gratis</div>
                  </td>
                  <td className="text-center py-4 px-6 bg-red-50">
                    <div className="text-2xl font-bold text-red-700">€9.99<span className="text-lg">/mes</span></div>
                    <div className="text-sm text-gray-600">€99.99/año (ahorra 17%)</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-2xl font-bold">€29.99<span className="text-lg">/mes</span></div>
                    <div className="text-sm text-gray-600">€299.99/año (ahorra 17%)</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">PREGUNTAS FRECUENTES</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow border border-gray-200">
              <h4 className="text-xl font-bold mb-3">¿Cómo funciona el pago?</h4>
              <p className="text-gray-600">
                Los pagos se procesan de forma segura mediante Stripe/PayPal. Puedes pagar con tarjeta de crédito/débito o PayPal. La suscripción se renueva automáticamente cada mes/año.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border border-gray-200">
              <h4 className="text-xl font-bold mb-3">¿Puedo cancelar en cualquier momento?</h4>
              <p className="text-gray-600">
                Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de control. No hay cargos por cancelación y seguirás teniendo acceso hasta el final del período pagado.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border border-gray-200">
              <h4 className="text-xl font-bold mb-3">¿Hay garantía de devolución?</h4>
              <p className="text-gray-600">
                Ofrecemos una garantía de satisfacción de 30 días. Si no estás contento con el servicio durante el primer mes, te devolvemos el 100% de tu dinero.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border border-gray-200">
              <h4 className="text-xl font-bold mb-3">¿Qué métodos de pago aceptan?</h4>
              <p className="text-gray-600">
                Aceptamos todas las tarjetas de crédito/débito principales (Visa, MasterCard, American Express) y PayPal. Los pagos son procesados de forma segura con encriptación SSL.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario final */}
        <div className="max-w-4xl mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </div>
  )
}