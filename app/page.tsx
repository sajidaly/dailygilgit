import { FeaturedNews } from '@/components/featured-news';
import { WeatherWidget } from '@/components/weather-widget';
import { QuickAccess } from '@/components/quick-access';
import { Spotlight } from '@/components/spotlight';
import { RecentBlogs } from '@/components/recent-blogs';
import { MediaGallery } from '@/components/media-gallery';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Gilgit-Baltistan
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your window to the land of mountains, glaciers, and rich cultural heritage
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <FeaturedNews />
        <WeatherWidget />
        <QuickAccess />
        <Spotlight />
        <RecentBlogs />
        <MediaGallery />
      </div>
    </div>
  );
}