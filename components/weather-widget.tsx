"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Cloud, Sun, CloudRain, AlertTriangle } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { WeatherData, districts, getWeatherData } from '@/lib/weather'

const WeatherIcon = ({ condition }: { condition: string }) => {
  switch (condition) {
    case 'sunny':
      return <Sun className="h-6 w-6 text-yellow-500" />
    case 'rainy':
      return <CloudRain className="h-6 w-6 text-blue-500" />
    default:
      return <Cloud className="h-6 w-6 text-gray-500" />
  }
}

export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        setLoading(true)
        setError(null)

        // Check if API key is configured
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
        if (!apiKey || apiKey === '63103a20ee160cb8ffd950fb804d4da0') {
          setUsingFallback(true)
        }

        const data = await Promise.all(
          districts.map(district => getWeatherData(district))
        )
        setWeatherData(data)
      } catch (err) {
        console.error('Error fetching weather data:', err)
        setError('Failed to fetch weather data. Using simulated data instead.')
        setUsingFallback(true)
      } finally {
        setLoading(false)
      }
    }

    fetchWeatherData()
    // Refresh weather data every 30 minutes
    const interval = setInterval(fetchWeatherData, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Weather Updates
      </motion.h2>

{/*       {usingFallback && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md flex items-center gap-2 text-yellow-800">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <p>
            Using simulated weather data. To see real weather data, please configure your OpenWeatherMap API key in the .env.local file.
          </p>
        </div>
      )}
 */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading
          ? Array(14).fill(null).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-4">
                <Skeleton className="h-6 w-24 mb-4" />
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-4 w-32" />
              </CardContent>
            </Card>
          ))
          : weatherData.map((data, index) => (
            <motion.div
              key={data.district}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all group">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{data.district}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <WeatherIcon condition={data.condition} />
                    <span className="text-2xl font-bold">{data.temp}°C</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {data.distance}km from Gilgit
                  </p>

                  {/* Forecast Preview - Shows on hover */}
                  <div className="h-0 group-hover:h-32 overflow-hidden transition-all duration-300">
                    <div className="pt-4 grid grid-cols-5 gap-2">
                      {data.forecast.map((day, i) => (
                        <div key={i} className="text-center">
                          <span className="text-xs block mb-1">{day.day}</span>
                          <WeatherIcon condition={day.condition} />
                          <span className="text-xs block mt-1">{day.temp}°C</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </div>
    </section>
  )
}
