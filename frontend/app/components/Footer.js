export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Akshay Karada
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Full-Stack Web Developer & Software Engineer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/akshaykarada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/akshaykarada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Akshay Karada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 