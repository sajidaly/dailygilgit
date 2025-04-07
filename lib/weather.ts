export interface WeatherData {
  district: string
  temp: number
  condition: 'sunny' | 'cloudy' | 'rainy'
  distance: number
  forecast: Array<{
    day: string
    temp: number
    condition: 'sunny' | 'cloudy' | 'rainy'
  }>
}

export const districts = [
  'Gilgit', 'Hunza', 'Nagar', 'Skardu', 'Shigar', 'Kharmang', 'Astore',
  'Ghanche', 'Ghizer', 'Yasin', 'Gupis', 'Darel', 'Tangir', 'Diamer'
]

// You'll need to replace this with your actual OpenWeatherMap API key
const OPENWEATHER_API_KEY =  "63103a20ee160cb8ffd950fb804d4da0"

// Add debugging to check if API key is loaded
if (!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === 'your_api_key_here') {
  console.error('OpenWeatherMap API key is not set or is using the placeholder value')
}

// Fallback function to generate simulated weather data
function generateFallbackData(district: string): WeatherData {
  return {
    district,
    temp: Math.floor(Math.random() * 20) + 5,
    condition: ['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)] as WeatherData['condition'],
    distance: Math.floor(Math.random() * 300) + 50,
    forecast: Array(5).fill(null).map((_, i) => ({
      day: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
      temp: Math.floor(Math.random() * 20) + 5,
      condition: ['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)] as WeatherData['condition']
    }))
  }
}

export async function getWeatherData(district: string): Promise<WeatherData> {
  try {
    if (!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === 'your_api_key_here') {
      console.warn('Using fallback weather data because API key is not configured')
      return generateFallbackData(district)
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${district},PK&units=metric&appid=${"63103a20ee160cb8ffd950fb804d4da0"}`
    )
    
    if (!response.ok) {
      const errorData = await response.json()
      console.error(`API error for ${district}:`, errorData)
      console.warn('Using fallback weather data due to API error')
      return generateFallbackData(district)
    }
    
    const data = await response.json()

    // Get 5-day forecast
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${district},PK&units=metric&appid=${OPENWEATHER_API_KEY}`
    )
    
    if (!forecastResponse.ok) {
      const errorData = await forecastResponse.json()
      console.error(`Forecast API error for ${district}:`, errorData)
      console.warn('Using fallback weather data due to forecast API error')
      return generateFallbackData(district)
    }
    
    const forecastData = await forecastResponse.json()

    // Map OpenWeather conditions to our simplified conditions
    const mapCondition = (condition: string): 'sunny' | 'cloudy' | 'rainy' => {
      if (condition.includes('rain')) return 'rainy'
      if (condition.includes('cloud')) return 'cloudy'
      return 'sunny'
    }

    // Process forecast data
    const forecast = forecastData.list
      .filter((item: any, index: number) => index % 8 === 0) // Get one forecast per day
      .slice(0, 5)
      .map((item: any) => ({
        day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
        temp: Math.round(item.main.temp),
        condition: mapCondition(item.weather[0].main.toLowerCase())
      }))

    return {
      district,
      temp: Math.round(data.main.temp),
      condition: mapCondition(data.weather[0].main.toLowerCase()),
      distance: 0, // You might want to calculate this based on actual coordinates
      forecast
    }
  } catch (error) {
    console.error(`Error fetching weather data for ${district}:`, error)
    console.warn('Using fallback weather data due to error')
    return generateFallbackData(district)
  }
} 
