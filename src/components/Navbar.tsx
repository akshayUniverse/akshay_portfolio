'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-10 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Akshay Karada
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Contact
            </Link>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button 
              onClick={toggleMobileMenu}
              className="ml-4 text-gray-700 dark:text-gray-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2 py-3">
              <Link href="/" className="text-gray-700 dark:text-gray-300 block px-3 py-2">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 block px-3 py-2">
                About
              </Link>
              <Link href="/projects" className="text-gray-700 dark:text-gray-300 block px-3 py-2">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 block px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 