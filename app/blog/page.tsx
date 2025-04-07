import { Metadata } from 'next';
import { User, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Blog - DailyGilgit',
    description: 'Read our latest blog posts about life, culture, and travel in Gilgit-Baltistan. Stories, guides, and local perspectives.',
    keywords: 'Gilgit-Baltistan blog, travel stories, cultural articles, local life, mountain tourism, Nagar Valley',
};

const blogPosts = [
    {
        title: "Discovering Nagar Valley: A Hidden Gem of Gilgit-Baltistan",
        excerpt: "Explore the breathtaking landscapes, rich culture, and ancient traditions of Nagar Valley, one of the most beautiful regions in Gilgit-Baltistan. From the majestic Diran Peak to the historic Nagar Fort, discover what makes this valley special.",
        author: "Sarah Ahmed",
        date: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Ancient Forts of Nagar: A Journey Through Time",
        excerpt: "Dive into the history of Nagar's ancient forts, including the famous Nagar Fort and Altit Fort. Learn about their architectural significance and the stories they tell about the region's rich heritage.",
        author: "Ali Khan",
        date: "March 14, 2024",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Trekking in Nagar: Routes and Adventures",
        excerpt: "From the challenging Diran Peak trek to the scenic Hoper Glacier, discover the best trekking routes in Nagar Valley. Complete guide with difficulty levels, best seasons, and essential tips.",
        author: "Maryam Shah",
        date: "March 13, 2024",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Local Cuisine of Nagar: Traditional Delicacies",
        excerpt: "Experience the unique flavors of Nagar Valley through its traditional dishes. From the famous Nagar bread to local apricot-based desserts, explore the culinary heritage of this region.",
        author: "Zara Khan",
        date: "March 12, 2024",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Cultural Festivals of Nagar Valley",
        excerpt: "Immerse yourself in the vibrant festivals of Nagar Valley. From the spring celebrations to traditional music performances, discover how locals preserve and celebrate their cultural heritage.",
        author: "Hassan Ali",
        date: "March 11, 2024",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Sustainable Tourism in Nagar: A Community Approach",
        excerpt: "Learn about the community-led initiatives in Nagar Valley that promote sustainable tourism while preserving the region's natural beauty and cultural heritage for future generations.",
        author: "Fatima Khan",
        date: "March 10, 2024",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Hunza Valley: The Land of Longevity",
        excerpt: "Discover why Hunza Valley is known as the 'Land of Longevity'. Explore the lifestyle, diet, and traditions that contribute to the remarkable health and longevity of its people.",
        author: "Dr. Aisha Khan",
        date: "March 9, 2024",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Majestic Rakaposhi: Hunza's Crown Jewel",
        excerpt: "Journey to the base of Rakaposhi, one of the most beautiful mountains in the world. Learn about its significance in local culture and the best viewpoints to capture its grandeur.",
        author: "Mountain Guide Ali",
        date: "March 8, 2024",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Hunza's Ancient Silk Road Heritage",
        excerpt: "Trace the footsteps of ancient traders along the Silk Road in Hunza Valley. Explore the historic caravanserais, trading posts, and the cultural exchange that shaped this region.",
        author: "Professor Ahmed",
        date: "March 7, 2024",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Apricot Blossom Festival of Hunza",
        excerpt: "Experience the magical Apricot Blossom Festival in Hunza Valley. From traditional music to local crafts, discover how this spring celebration brings the community together.",
        author: "Cultural Expert Sara",
        date: "March 6, 2024",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Hunza's Traditional Music and Dance",
        excerpt: "Immerse yourself in the rich musical heritage of Hunza Valley. From the soulful rubab to traditional dance performances, explore the artistic expressions of this ancient culture.",
        author: "Musicologist Zainab",
        date: "March 5, 2024",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Sustainable Agriculture in Hunza Valley",
        excerpt: "Learn about the innovative farming techniques and sustainable agricultural practices that have sustained the Hunza people for centuries. From terraced farming to organic methods.",
        author: "Agricultural Expert Hassan",
        date: "March 4, 2024",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
    }
];

function BlogSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
                <div
                    key={index}
                    className={cn(
                        "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",
                        "transform hover:translate-y-[-4px] transition-all duration-300",
                        "animate-fade-up"
                    )}
                    style={{ animationDelay: `${index * 200}ms` }}
                >
                    <div className="relative h-48">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.date}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function BlogPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <section className="py-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Blog</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                    Stories, insights, and guides from Gilgit-Baltistan
                </p>
                <BlogSection />
            </section>
        </main>
    );
}
