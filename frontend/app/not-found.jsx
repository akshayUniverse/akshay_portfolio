import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        
        <h2 className="text-2xl font-bold mt-4 mb-8">Page Not Found</h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Link 
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
} 