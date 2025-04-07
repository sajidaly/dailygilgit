import { Metadata } from 'next';
import { MediaGallery } from '../components/MediaGallery';

export const metadata: Metadata = {
    title: 'Media Gallery - DailyGilgit',
    description: 'Explore our collection of photos and videos from Gilgit-Baltistan. Visual stories of landscapes, culture, and daily life.',
    keywords: 'Gilgit-Baltistan photos, videos, media gallery, landscape photography, cultural documentation',
};

export default function MediaPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <section className="py-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Media Gallery</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                    Visual stories from the heart of Gilgit-Baltistan
                </p>
                <MediaGallery />
            </section>
        </main>
    );
}
