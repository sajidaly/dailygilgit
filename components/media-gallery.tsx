"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mediaItems = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Nagar Valley, Gilgit-Baltistan',
    description: `Discover the ancient kingdom of Nagar, where centuries-old traditions
              meet breathtaking landscapes. `
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?auto=format&fit=crop&q=80&w=1920',
    title: 'Hunza Valley Panorama',
    description: 'Stunning view of the Hunza Valley during sunset'
  },
  {
    type: 'image',
    title: 'Mountain Trek',
    url: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    description: 'Hiking trail in the Karakoram range'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Karakoram Mountains',
    description: 'Majestic peaks of the Karakoram range'
  },
];

export function MediaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
    setImageError(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Media Gallery</h2>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0 relative">
              {imageError ? (
                <div className="w-full h-[600px] flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">Image failed to load</p>
                </div>
              ) : (
                <img
                  src={mediaItems[currentIndex].url}
                  alt={mediaItems[currentIndex].title}
                  className="w-full h-[600px] object-cover"
                  onError={handleImageError}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {mediaItems[currentIndex].title}
                </h3>
                <p className="text-sm opacity-90">
                  {mediaItems[currentIndex].description}
                </p>
              </div>
            </CardContent>
          </Card>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>

        <div className="flex justify-center mt-4 gap-2">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex
                ? 'bg-emerald-600'
                : 'bg-gray-300 hover:bg-emerald-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}