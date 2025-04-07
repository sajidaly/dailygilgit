// app/contact/page.tsx
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - DailyGilgit',
    description: 'Get in touch with DailyGilgit. Contact information, office location, and inquiry form.',
    keywords: ['contact DailyGilgit', 'feedback', 'inquiries', 'office location', 'contact form'],
};

export default function ContactPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
            <section className="py-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                    We'd love to hear from you. Get in touch with our team.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <button
                                disabled={true}
                                type="submit"
                                className="w-full bg-green-400 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition-colors cursor-not-allowed"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-green-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-300">sajidsanju573@gmail.com
                                    </p>
                                </div>
                            </div>
                            {/* <div className="flex items-start">
                                <Phone className="w-6 h-6 text-green-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-300">+92 (300) 123-4567</p>
                                </div>
                            </div> */}
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Gilgit City<br />
                                        Gilgit-Baltistan, Pakistan
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-green-600 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Office Hours</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                                        Saturday: 10:00 AM - 2:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gilgit-Baltistan Info Section */}
            <section className="py-16 border-t border-gray-200 dark:border-gray-700 mt-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Gilgit-Baltistan</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                    Gilgit-Baltistan is a breathtaking region in northern Pakistan, home to some of the world's highest peaks,
                    including K2 and Nanga Parbat. Rich in culture, natural beauty, and adventure, it attracts tourists, mountaineers, and explorers
                    from around the globe. With its diverse communities and unique traditions, Gilgit-Baltistan represents the true heart of the Karakoram.
                </p>
            </section>
        </main>
    );
}
