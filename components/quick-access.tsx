"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Newspaper,
  Mountain,
  Briefcase,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: 'News',
    icon: Newspaper,
    description: 'Latest updates from Gilgit-Baltistan',
    href: '/news',
    color: 'text-blue-500',
  },
  {
    title: 'Tourism',
    icon: Mountain,
    description: 'Explore the beauty of our region',
    href: '/tourism',
    color: 'text-emerald-500',
  },
  {
    title: 'Jobs',
    icon: Briefcase,
    description: 'Career opportunities in GB',
    href: '/jobs',
    color: 'text-purple-500',
  },
  {
    title: 'Events',
    icon: Calendar,
    description: 'Upcoming events and festivals',
    href: '/events',
    color: 'text-orange-500',
  },
];

export function QuickAccess() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Quick Access</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {categories.map((category) => (
          <motion.div key={category.title} variants={item}>
            <Link href={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <category.icon className={`h-12 w-12 ${category.color} transition-transform group-hover:scale-110`} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}