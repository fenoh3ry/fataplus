import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutProps } from '../../types';
import CartIcon from '../marketplace/CartIcon';
import { useAuth } from '../../contexts/AuthContext';

export default function Layout({ children }: LayoutProps): React.ReactElement {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-brand-600 text-white shadow-md'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-2xl font-bold'>Fataplus AI</h1>
            <nav className='hidden md:flex space-x-6'>
              <Link href='/' className='hover:text-brand-200 transition-colors'>Home</Link>
              <Link href='/map' className='hover:text-brand-200 transition-colors'>Map</Link>
              <Link href='/learning' className='hover:text-brand-200 transition-colors'>Learning</Link>
              <Link href='/marketplace' className='hover:text-brand-200 transition-colors'>Marketplace</Link>
            </nav>
          </div>
          <div className='flex items-center space-x-4'>
            <CartIcon />
            
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className='flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-md font-medium hover:bg-opacity-30 transition-colors'
                >
                  <span>{user.email?.split('@')[0]}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button 
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href='/auth/signin'>
                <span className='bg-white text-brand-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors'>
                  Sign In
                </span>
              </Link>
            )}
          </div>
        </div>
      </header>
      <main className='container mx-auto px-4 py-8'>{children}</main>
      <footer className='bg-gray-800 text-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>Fataplus AI</h3>
              <p className='text-gray-400'>AI-powered agritech ecosystem for Malagasy farmers</p>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-2'>
                <li><Link href='/' className='text-gray-400 hover:text-white transition-colors'>Home</Link></li>
                <li><Link href='/map' className='text-gray-400 hover:text-white transition-colors'>Map</Link></li>
                <li><Link href='/learning' className='text-gray-400 hover:text-white transition-colors'>Learning</Link></li>
                <li><Link href='/marketplace' className='text-gray-400 hover:text-white transition-colors'>Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-4'>Contact</h4>
              <p className='text-gray-400'>support@fataplus.com</p>
            </div>
          </div>
          <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-400'>
            © 2025 Fataplus AI - All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
