import Image from 'next/image';
import { Mountain, Map, Sun, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tourism - DailyGilgit',
    description: 'Plan your visit to Gilgit-Baltistan. Discover tourist attractions, travel guides, and accommodation options.',
    keywords: 'Gilgit tourism, travel guide, tourist attractions, hotels, Hunza Valley, Fairy Meadows',
};

const attractions = [
    {
        title: "Hunza Valley",
        description: "Experience the beauty of ancient silk route and stunning mountain views.",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Fairy Meadows",
        description: "Camp under the stars with a direct view of Nanga Parbat.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Baltit Fort",
        description: "Explore the ancient architecture of this UNESCO World Heritage site.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Nagar Valley",
        description: "Discover the pristine beauty of Nagar Valley with its crystal-clear lakes and majestic peaks.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800"
    }
];

export default function TourismPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <section className="py-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Tourism in Gilgit-Baltistan
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                    Discover the majestic beauty of Pakistan&apos;s northern paradise
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        { icon: Mountain, title: "Mountain Peaks", text: "Home to five of the world&apos;s 14 highest peaks" },
                        { icon: Map, title: "Ancient Routes", text: "Part of the historic Silk Road" },
                        { icon: Sun, title: "Climate", text: "Four distinct seasons with unique experiences" },
                        { icon: Users, title: "Culture", text: "Rich cultural heritage and warm hospitality" }
                    ].map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-200">
                            <item.icon className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Popular Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {attractions.map((attraction, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-200">
                            <div className="h-48 overflow-hidden relative">
                                <Image
                                    src={attraction.image}
                                    alt={attraction.title}
                                    fill
                                    className="object-cover transform hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{attraction.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{attraction.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
