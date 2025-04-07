import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

const sampleNews = [
    {
        title: "New Tourism Initiative Launches in Hunza Valley",
        description: "Local authorities announce sustainable tourism program to preserve cultural heritage.",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800",
        date: "2024-03-15",
        tags: ["Tourism", "Culture"]
    },
    {
        title: "Explore Nagar Valley",
        description: "Discover the ancient kingdom of Nagar, where centuries-old traditions meet breathtaking landscapes. Home to some of the world's highest peaks and most hospitable people.",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        date: "2024-03-14",
        tags: ["Tourism", "Culture", "Heritage"]
    },
    {
        title: "Traditional Music Festival Celebrates Local Artists",
        description: "Annual gathering showcases rich musical heritage of Gilgit-Baltistan.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
        date: "2024-03-14",
        tags: ["Culture", "Events"]
    },
    {
        title: "Mountain Clean-up Drive Gains Momentum",
        description: "Community-led initiative to preserve natural beauty of the region.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
        date: "2024-03-13",
        tags: ["Environment", "Community"]
    }
];

export function NewsSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleNews.map((news, index) => (
                <div
                    key={index}
                    className={cn(
                        "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",
                        "transform hover:scale-102 transition-all duration-300",
                        "animate-fade-in",
                        "border border-gray-100 dark:border-gray-700",
                        "transition-colors duration-200"
                    )}
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <Calendar className="w-4 h-4" />
                            <span>{news.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-200">{news.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">{news.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {news.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium transition-colors duration-200"
                                >
                                    <Tag className="w-3 h-3 inline mr-1" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200"
                        >
                            Read More
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
} 