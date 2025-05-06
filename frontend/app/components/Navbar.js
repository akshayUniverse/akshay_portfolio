export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-10 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Akshay Karada
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Home
            </a>
            <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              About
            </a>
            <a href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Projects
            </a>
            <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 