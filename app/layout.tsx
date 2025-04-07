import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DailyGilgit - Your Window to Gilgit-Baltistan',
  description: 'Discover the latest news, weather updates, and cultural insights from the beautiful region of Gilgit-Baltistan, Pakistan.',
  keywords: 'Gilgit-Baltistan, Pakistan news, weather updates, tourism, local events',
  openGraph: {
    title: 'DailyGilgit - Your Window to Gilgit-Baltistan',
    description: 'Discover the latest news, weather updates, and cultural insights from Gilgit-Baltistan',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}