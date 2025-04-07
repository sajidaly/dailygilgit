import { Metadata } from 'next';
import { Calendar, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Local Updates - DailyGilgit',
    description: 'Get the latest local updates from Gilgit-Baltistan. Community news, events, and important announcements.',
    keywords: 'local updates, community news, Gilgit-Baltistan events, public announcements',
};

const updates = [
    {
        title: "Road Construction Update",
        location: "Karakoram Highway",
        date: "March 15, 2024",
        description: "Maintenance work scheduled between Gilgit and Hunza sectors.",
        category: "Infrastructure"
    },
    {
        title: "Cultural Festival Announcement",
        location: "Skardu",
        date: "March 20, 2024",
        description: "Three-day cultural festival showcasing local traditions.",
        category: "Events"
    },
    {
        title: "Healthcare Initiative",
        location: "Ghizer District",
        date: "March 18, 2024",
        description: "Mobile medical camp providing free healthcare services.",
        category: "Healthcare"
    },
    {
        title: "Tourism Season Opening",
        location: "Hunza Valley",
        date: "April 1, 2024",
        description: "Official opening of the spring tourism season with special cultural performances and local food festivals.",
        category: "Tourism"
    },
    {
        title: "Education Reform",
        location: "Gilgit City",
        date: "March 25, 2024",
        description: "New digital learning centers to be established in public schools across the region.",
        category: "Education"
    },
    {
        title: "Agricultural Support Program",
        location: "Nagar District",
        date: "March 22, 2024",
        description: "Distribution of modern farming equipment and training sessions for local farmers.",
        category: "Agriculture"
    },
    {
        title: "Winter Sports Championship",
        location: "Naltar Valley",
        date: "March 28, 2024",
        description: "Annual skiing competition with participants from across Pakistan.",
        category: "Sports"
    },
    {
        title: "Environmental Conservation",
        location: "Deosai National Park",
        date: "April 5, 2024",
        description: "Community cleanup drive and awareness program for wildlife protection.",
        category: "Environment"
    }
];

export default function LocalUpdatesPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <section className="py-12">
                <h1 className="text-4xl font-bold text-foreground mb-6">Local Updates</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Stay informed about the latest developments in your community
                </p>

                <div className="space-y-6">
                    {updates.map((update, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl shadow-lg p-6 border border-border"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                    {update.category}
                                </span>
                                <div className="flex items-center text-muted-foreground text-sm">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {update.date}
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold text-foreground mb-2">{update.title}</h2>
                            <div className="flex items-center text-muted-foreground mb-4">
                                <MapPin className="w-4 h-4 mr-1" />
                                {update.location}
                            </div>
                            <p className="text-muted-foreground">{update.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
