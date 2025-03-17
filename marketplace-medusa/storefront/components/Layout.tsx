import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CartIcon from './CartIcon';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Fataplus Marketplace</title>
        <meta name="description" content="Buy and sell agricultural products from Malagasy farmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-brand-600">
            Fataplus Market
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-brand-600">
              Home
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-brand-600">
              Cart
            </Link>
            <CartIcon />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Fataplus Marketplace</h3>
              <p className="text-gray-300">
                Connecting farmers and buyers across Madagascar with a modern digital marketplace.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="text-gray-300 hover:text-white">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">
                Email: info@fataplus.mg<br />
                Phone: +261 34 12 345 67
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Fataplus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}