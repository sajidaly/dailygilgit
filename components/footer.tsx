import { Mountain } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-6 w-6 text-emerald-600" />
              <span className="text-lg font-bold">DailyGilgit</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your comprehensive source for news, weather updates, and cultural insights from
              Gilgit-Baltistan.
            </p>

          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600">
                  News
                </Link>
              </li>
              <li>
                <Link href="/tourism" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600">
                  Tourism
                </Link>
              </li>
              <li>
                <Link href="/local-updates" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600">
                  Local Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Stay updated with the latest from Gilgit-Baltistan
            </p>

          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} DailyGilgit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}