'use client'

import { useState, useEffect, useRef } from 'react'
import { TrendingUp, RefreshCw, ExternalLink, Clock, Zap } from 'lucide-react'
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
  isNew?: boolean
}

// Generar datos iniciales basados en la hora actual
const generateInitialTrends = (): Trend[] => {
  const now = new Date()
  const baseTime = now.toISOString()
  
  // Tendencias más realistas para un periódico
  const trends: Trend[] = [
    { 
      id: 1, 
      title: 'Incendio controlado en edificio Madrid', 
      category: 'ÚLTIMA HORA', 
      searchVolume: 98, 
      change: +45, 
      isHot: true, 
      timestamp: new Date(now.getTime() - 15 * 60000).toISOString(),
      isNew: true
    },
    { 
      id: 2, 
      title: 'Real Madrid gana clásico contra Barcelona', 
      category: 'DEPORTES', 
      searchVolume: 92, 
      change: +38, 
      isHot: true, 
      timestamp: new Date(now.getTime() - 45 * 60000).toISOString()
    },
    { 
      id: 3, 
      title: 'Nueva ley de vivienda aprobada en el Congreso', 
      category: 'POLÍTICA', 
      searchVolume: 87, 
      change: +22, 
      isHot: true, 
      timestamp: new Date(now.getTime() - 90 * 60000).toISOString()
    },
    { 
      id: 4, 
      title: 'Tecnología 5G llega a zonas rurales', 
      category: 'TECNOLOGÍA', 
      searchVolume: 81, 
      change: +15, 
      isHot: false, 
      timestamp: new Date(now.getTime() - 120 * 60000).toISOString()
    },
    { 
      id: 5, 
      title: 'Influencer español gana premio internacional', 
      category: 'INFLUENCER/POP', 
      searchVolume: 76, 
      change: +28, 
      isHot: true, 
      timestamp: new Date(now.getTime() - 150 * 60000).toISOString()
    },
    { 
      id: 6, 
      title: 'Equipo español campeón en torneo esports', 
      category: 'ESPORTS', 
      searchVolume: 72, 
      change: +19, 
      isHot: false, 
      timestamp: new Date(now.getTime() - 180 * 60000).toISOString()
    },
  ]
  
  return trends.sort((a, b) => b.searchVolume - a.searchVolume)
}

export default function TrendingSection() {
  const [trends, setTrends] = useState<Trend[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string>('Actualizando...')
  const [updateCount, setUpdateCount] = useState(0)
  const hasInitialized = useRef(false)

  // Inicializar con datos basados en la hora actual
  useEffect(() => {
    if (!hasInitialized.current) {
      const initialTrends = generateInitialTrends()
      setTrends(initialTrends)
      setLastUpdated('Recién actualizado')
      hasInitialized.current = true
    }
  }, [])

  // Función para simular actualización en tiempo real con cambios más visibles
  const updateTrends = () => {
    setIsLoading(true)
    setLastUpdated('Actualizando ahora...')
    
    // Simular llamada a API
    setTimeout(() => {
      const now = new Date()
      const updatedTrends = trends.map(trend => {
        // Cambios más significativos y visibles
        const volumeChange = Math.floor(Math.random() * 15) - 3 // -3 a +11
        const trendChange = Math.floor(Math.random() * 25) - 5 // -5 a +19
        
        const newVolume = Math.min(100, Math.max(60, trend.searchVolume + volumeChange))
        const newChange = trendChange
        
        // Marcar como nuevo si el cambio es significativo
        const isNewTrend = Math.abs(trendChange) > 12
        
        return {
          ...trend,
          searchVolume: newVolume,
          change: newChange,
          isHot: newChange > 8 || trend.isHot,
          isNew: isNewTrend,
          timestamp: now.toISOString()
        }
      })
      
      // Reordenar y posiblemente cambiar posiciones
      const reorderedTrends = [...updatedTrends]
        .sort((a, b) => b.searchVolume - a.searchVolume)
        .map((trend, index) => ({
          ...trend,
          id: index + 1 // Actualizar IDs según nueva posición
        }))
      
      setTrends(reorderedTrends)
      setUpdateCount(prev => prev + 1)
      setLastUpdated(`Actualizado hace ${Math.floor(Math.random() * 3) + 1} min`)
      setIsLoading(false)
    }, 800)
  }

  // Actualizar automáticamente cada 60 segundos (más frecuente)
  useEffect(() => {
    const interval = setInterval(updateTrends, 60000) // 1 minuto
    return () => clearInterval(interval)
  }, [trends])

  // Formatear fecha relativa
  const formatRelativeTime = (timestamp: string) => {
    const now = new Date()
    const trendTime = new Date(timestamp)
    const diffSeconds = Math.floor((now.getTime() - trendTime.getTime()) / 1000)
    const diffMinutes = Math.floor(diffSeconds / 60)
    
    if (diffSeconds < 60) return 'Ahora mismo'
    if (diffMinutes < 60) return `Hace ${diffMinutes} min`
    if (diffMinutes < 1440) return `Hace ${Math.floor(diffMinutes / 60)} h`
    return `Hace ${Math.floor(diffMinutes / 1440)} d`
  }

  // Obtener color para el cambio
  const getChangeColor = (change: number) => {
    if (change > 15) return 'text-green-700 font-bold'
    if (change > 0) return 'text-green-600'
    if (change < -5) return 'text-red-600'
    if (change < 0) return 'text-red-500'
    return 'text-gray-500'
  }

  // Obtener icono para el cambio
  const getChangeIcon = (change: number) => {
    if (change > 15) return '🚀'
    if (change > 0) return '↗'
    if (change < 0) return '↘'
    return '→'
  }

  // Obtener color de categoría
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ÚLTIMA HORA': return 'bg-red-100 text-red-700'
      case 'DEPORTES': return 'bg-amber-100 text-amber-700'
      case 'POLÍTICA': return 'bg-blue-100 text-blue-700'
      case 'TECNOLOGÍA': return 'bg-emerald-100 text-emerald-700'
      case 'INFLUENCER/POP': return 'bg-purple-100 text-purple-700'
      case 'ESPORTS': return 'bg-blue-100 text-blue-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div>
      {/* Header con botón de actualización y contador */}
      <div className="px-5 py-3 flex items-center justify-between bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-3.5 w-3.5 text-red-500" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-gray-700">
            TENDENCIAS EN VIVO
          </span>
          {updateCount > 0 && (
            <span className="text-[9px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full">
              {updateCount} actualizaciones
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={updateTrends}
            disabled={isLoading}
            className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded transition disabled:opacity-50"
            aria-label="Actualizar tendencias ahora"
          >
            <RefreshCw className={`h-3 w-3 ${isLoading ? 'animate-spin' : ''}`} />
            <span>{isLoading ? 'Actualizando...' : 'Actualizar'}</span>
          </button>
          <span className="text-[10px] text-gray-500 flex items-center gap-1">
            <Clock className="h-2.5 w-2.5" />
            {lastUpdated}
          </span>
        </div>
      </div>

      {/* Lista de tendencias */}
      <ol>
        {trends.map((trend, index) => (
          <li key={trend.id} className="relative">
            {trend.isNew && (
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                <Zap className="h-3 w-3 text-yellow-500 animate-pulse" />
              </div>
            )}
            
            <Link
              href={`/buscar?q=${encodeURIComponent(trend.title)}`}
              className="w-full flex items-center gap-3 px-5 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors group no-underline"
            >
              {/* Número de ranking con estilo mejorado */}
              <span className={`text-[13px] font-black w-5 shrink-0 tabular-nums ${
                index === 0 ? 'text-red-600' : 
                index === 1 ? 'text-amber-600' : 
                index === 2 ? 'text-blue-600' : 'text-gray-300'
              }`}>
                {index + 1}
              </span>

              {/* Contenido principal */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-800 font-semibold truncate group-hover:text-red-600 transition-colors">
                    {trend.title}
                  </span>
                  {trend.isHot && (
                    <span className="inline-flex items-center px-1.5 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-full animate-pulse">
                      🔥 HOT
                    </span>
                  )}
                  {trend.isNew && (
                    <span className="inline-flex items-center px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full">
                      NUEVO
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(trend.category)}`}>
                    {trend.category}
                  </span>
                  
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-gray-500">Volumen:</span>
                    <span className="font-semibold">{trend.searchVolume}%</span>
                  </div>
                  
                  <div className={`flex items-center gap-1 text-xs ${getChangeColor(trend.change)}`}>
                    <span>{getChangeIcon(trend.change)}</span>
                    <span className="font-medium">{trend.change > 0 ? '+' : ''}{trend.change}%</span>
                  </div>
                </div>
              </div>

              {/* Indicador de tiempo */}
              <div className="text-right shrink-0">
                <span className="text-[10px] text-gray-500 block">
                  {formatRelativeTime(trend.timestamp)}
                </span>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-red-500 transition-colors ml-auto mt-1" />
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {/* Indicador de actividad */}
      <div className="px-5 py-2 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-500">
            Actualización automática cada 60 segundos
          </span>
          <div className="flex items-center gap-1">
            <div className={`h-1.5 w-1.5 rounded-full ${isLoading ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
            <span className="text-[10px] text-gray-500">
              {isLoading ? 'Actualizando...' : 'En línea'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}