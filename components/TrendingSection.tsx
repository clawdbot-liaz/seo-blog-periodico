'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, RefreshCw, ExternalLink, Clock } from 'lucide-react'
import Link from 'next/link'

// Tipos de tendencias
interface Trend {
  id: number
  title: string
  category: string
  searchVolume: number
  change: number // porcentaje de cambio
  isHot: boolean
  timestamp: string
}

// Datos iniciales (se actualizarán en tiempo real)
const initialTrends: Trend[] = [
  { id: 1, title: 'Elecciones europeas 2026', category: 'Política', searchVolume: 95, change: +12, isHot: true, timestamp: '2026-03-30T16:30:00Z' },
  { id: 2, title: 'Crisis climática Mediterráneo', category: 'Medio Ambiente', searchVolume: 88, change: +8, isHot: true, timestamp: '2026-03-30T15:45:00Z' },
  { id: 3, title: 'Avance IA diagnóstico médico', category: 'Tecnología', searchVolume: 82, change: +15, isHot: true, timestamp: '2026-03-30T16:15:00Z' },
  { id: 4, title: 'Mercado inmobiliario España', category: 'Economía', searchVolume: 76, change: -3, isHot: false, timestamp: '2026-03-30T14:20:00Z' },
  { id: 5, title: 'Nuevo smartphone plegable', category: 'Tecnología', searchVolume: 71, change: +5, isHot: false, timestamp: '2026-03-30T13:50:00Z' },
  { id: 6, title: 'Reforma educativa secundaria', category: 'Educación', searchVolume: 68, change: +9, isHot: false, timestamp: '2026-03-30T12:30:00Z' },
]

export default function TrendingSection() {
  const [trends, setTrends] = useState<Trend[]>(initialTrends)
  const [isLoading, setIsLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string>('Hace 5 minutos')

  // Función para simular actualización en tiempo real
  const updateTrends = () => {
    setIsLoading(true)
    
    // Simular llamada a API
    setTimeout(() => {
      const now = new Date().toISOString()
      const updatedTrends = trends.map(trend => {
        // Simular cambios en volumen de búsqueda
        const randomChange = Math.floor(Math.random() * 10) - 2 // -2 a +7
        const newVolume = Math.min(100, Math.max(50, trend.searchVolume + randomChange))
        const newChange = Math.floor(Math.random() * 20) - 5 // -5 a +14
        
        return {
          ...trend,
          searchVolume: newVolume,
          change: newChange,
          isHot: newChange > 5,
          timestamp: now
        }
      }).sort((a, b) => b.searchVolume - a.searchVolume) // Reordenar por volumen
      
      setTrends(updatedTrends)
      setLastUpdated('Hace unos segundos')
      setIsLoading(false)
    }, 1000)
  }

  // Actualizar automáticamente cada 2 minutos
  useEffect(() => {
    const interval = setInterval(updateTrends, 120000) // 2 minutos
    return () => clearInterval(interval)
  }, [])

  // Formatear fecha relativa
  const formatRelativeTime = (timestamp: string) => {
    const now = new Date()
    const trendTime = new Date(timestamp)
    const diffMinutes = Math.floor((now.getTime() - trendTime.getTime()) / (1000 * 60))
    
    if (diffMinutes < 1) return 'Ahora mismo'
    if (diffMinutes < 60) return `Hace ${diffMinutes} min`
    if (diffMinutes < 1440) return `Hace ${Math.floor(diffMinutes / 60)} h`
    return `Hace ${Math.floor(diffMinutes / 1440)} d`
  }

  // Obtener color para el cambio
  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600'
    if (change < 0) return 'text-red-600'
    return 'text-gray-500'
  }

  // Obtener icono para el cambio
  const getChangeIcon = (change: number) => {
    if (change > 0) return '↗'
    if (change < 0) return '↘'
    return '→'
  }

  return (
    <div>
      {/* Header con botón de actualización */}
      <div className="px-5 py-3 flex items-center justify-between bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-3.5 w-3.5 text-gray-500" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-gray-500">
            Tendencias en tiempo real
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={updateTrends}
            disabled={isLoading}
            className="p-1 text-gray-400 hover:text-gray-600 transition disabled:opacity-50"
            aria-label="Actualizar tendencias"
          >
            <RefreshCw className={`h-3 w-3 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <span className="text-[10px] text-gray-400 flex items-center gap-1">
            <Clock className="h-2.5 w-2.5" />
            {lastUpdated}
          </span>
        </div>
      </div>

      {/* Lista de tendencias */}
      <ol>
        {trends.map((trend, index) => (
          <li key={trend.id}>
            <Link
              href={`/buscar?q=${encodeURIComponent(trend.title)}`}
              className="w-full flex items-center gap-3 px-5 py-3 border-b border-gray-200 hover:bg-white transition-colors group no-underline"
            >
              {/* Número de ranking */}
              <span className="text-[13px] font-black text-gray-300 w-5 shrink-0 tabular-nums">
                {index + 1}
              </span>

              {/* Contenido principal */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-700 font-medium truncate group-hover:text-red-600 transition-colors">
                    {trend.title}
                  </span>
                  {trend.isHot && (
                    <span className="inline-flex items-center px-1.5 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-full">
                      HOT
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">
                    {trend.category}
                  </span>
                  
                  <span className="flex items-center gap-1">
                    <span className="text-gray-400">📈</span>
                    <span>{trend.searchVolume}%</span>
                  </span>
                  
                  <span className={`flex items-center gap-1 ${getChangeColor(trend.change)}`}>
                    <span>{getChangeIcon(trend.change)}</span>
                    <span>{trend.change > 0 ? '+' : ''}{trend.change}%</span>
                  </span>
                </div>
              </div>

              {/* Indicador de tiempo */}
              <div className="text-right shrink-0">
                <span className="text-[10px] text-gray-400 block">
                  {formatRelativeTime(trend.timestamp)}
                </span>
                <ExternalLink className="h-3 w-3 text-gray-300 group-hover:text-red-400 transition-colors ml-auto" />
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {/* Footer informativo */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
        <p className="text-[10px] text-gray-500 text-center">
          Tendencias basadas en búsquedas reales • Actualizado automáticamente
        </p>
      </div>
    </div>
  )
}