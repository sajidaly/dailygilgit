export const API_CONFIG = {
  NEWS_API_KEY: process.env.NEXT_PUBLIC_NEWS_API_KEY || '',
  WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY || '',
  NEWS_BASE_URL: 'https://newsdata.io/api/1/news',
  WEATHER_BASE_URL: 'https://api.openweathermap.org/data/2.5',
};

export const GB_DISTRICTS = [
  { name: 'Gilgit', lat: 35.9221, lon: 74.3087, distance: 0 },
  { name: 'Hunza', lat: 36.3167, lon: 74.6500, distance: 100 },
  { name: 'Nagar', lat: 36.2500, lon: 74.5833, distance: 95 },
  { name: 'Skardu', lat: 35.3000, lon: 75.6333, distance: 240 },
  { name: 'Shigar', lat: 35.4167, lon: 75.7333, distance: 260 },
  { name: 'Kharmang', lat: 35.2833, lon: 75.9333, distance: 280 },
  { name: 'Astore', lat: 35.3667, lon: 74.8500, distance: 120 },
  { name: 'Ghanche', lat: 35.3833, lon: 76.1667, distance: 300 },
  { name: 'Ghizer', lat: 36.1500, lon: 73.8667, distance: 110 },
  { name: 'Yasin', lat: 36.3667, lon: 73.3000, distance: 150 },
  { name: 'Gupis', lat: 36.2333, lon: 73.4500, distance: 140 },
  { name: 'Darel', lat: 35.7500, lon: 73.9000, distance: 80 },
  { name: 'Tangir', lat: 35.7000, lon: 73.9500, distance: 85 },
  { name: 'Diamer', lat: 35.2167, lon: 73.7667, distance: 160 },
];