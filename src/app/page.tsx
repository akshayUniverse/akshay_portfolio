export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Akshay Karada
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10">
          Full-Stack Web Developer & Software Engineer
        </p>
        <div className="mb-10 mt-6">
          <a href="#contact" className="inline-block rounded-2xl bg-blue-600 text-white font-semibold py-4 px-8 shadow-md transition-all hover:bg-blue-700 hover:shadow-lg">
            Contact Me
          </a>
        </div>
      </div>
    </main>
  )
} 