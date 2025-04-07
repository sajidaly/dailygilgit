"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const blogs = [
  {
    title: "Traditional Festivals of Gilgit-Baltistan",
    excerpt: "Explore the vibrant cultural celebrations that make our region unique...",
    date: "2024-03-15",
    author: "Sarah Khan",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Sustainable Tourism Initiatives",
    excerpt: "How local communities are preserving nature while welcoming visitors...",
    date: "2024-03-12",
    author: "Ali Hassan",
    category: "Tourism",
    image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Ancient Silk Route: A Historical Perspective",
    excerpt: "Tracing the footsteps of traders through Gilgit-Baltistan...",
    date: "2024-03-10",
    author: "Dr. Ahmed Shah",
    category: "History",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  }
];

export function RecentBlogs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Blog Posts</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {blogs.map((blog, index) => (
          <motion.div key={index} variants={item}>
            <Link href="/blog">
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-emerald-600 dark:text-emerald-400">
                      {blog.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(blog.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="text-sm">
                      <p className="font-medium">{blog.author}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}