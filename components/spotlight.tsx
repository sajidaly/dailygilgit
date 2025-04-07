"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function Spotlight() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Nagar Valley</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden">
          <div
            className="relative h-[400px] bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <CardContent className="relative h-full flex items-center justify-center text-white">
              <div className="max-w-2xl text-center">
                <h3 className="text-3xl font-bold mb-4">Nagar Valley</h3>
                <p className="text-lg mb-6">
                  A hidden gem in Gilgit-Baltistan, known for its pristine glaciers,
                  traditional villages, and rich cultural heritage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Elevation</h4>
                    <p>2,438 meters</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                    <p>May to October</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Known For</h4>
                    <p>Glaciers & Culture</p>
                  </div>
                </div>
              </div>
            </CardContent>

          </div>
        </Card>
      </motion.div>
    </section>
  );
}