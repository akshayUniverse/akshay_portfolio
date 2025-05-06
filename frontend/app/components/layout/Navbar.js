"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 font-bold text-2xl text-blue-600 dark:text-blue-400">
              Akshay Karada
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                About
              </Link>
              <Link href="/#skills" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Skills
              </Link>
              <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 