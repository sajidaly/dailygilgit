'use client';

import React from 'react';
import { Play } from 'lucide-react';
import { cn } from '../lib/utils';

const mediaItems = [
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?auto=format&fit=crop&q=80&w=800',
        title: 'Hunza Valley Sunrise'
    },
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
        title: 'Mountain Peaks'
    },
    {
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        title: 'Traditional Dance Festival',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        title: 'Local Market Scene'
    },
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
        title: 'Hopar Valley Nagar'
    },
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        title: 'Nagar Fort Sunset'
    },
    {
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        title: 'Nagar Cultural Festival',
        videoUrl: 'https://www.youtube.com/embed/example'
    }
];

export function MediaGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaItems.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "relative rounded-xl overflow-hidden group cursor-pointer",
                        "transform hover:scale-105 transition-all duration-300"
                    )}
                >
                    <img
                        src={item.type === 'video' ? item.thumbnail : item.url}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                    />
                    {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center
                group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-6 h-6 text-gray-900" />
                            </div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30
            transition-all duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white
              transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="text-lg font-semibold">{item.title}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
} 