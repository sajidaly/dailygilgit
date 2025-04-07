import { NewsSection } from '@/components/NewsSection';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'News - DailyGilgit',
    description: 'Stay updated with the latest news from Gilgit-Baltistan. Coverage of local events, developments, and important announcements.',
    keywords: 'Gilgit news, local news, Gilgit-Baltistan updates, current events, Pakistan northern areas news',
};

export default function NewsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <section className="py-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Latest News</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                    Stay informed with the latest updates from Gilgit-Baltistan
                </p>
                <NewsSection />
            </section>
        </main>
    );
}
