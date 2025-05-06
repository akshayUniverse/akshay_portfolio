import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Akshay Karada</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300">
              Full-Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              I build modern web applications with cutting-edge technologies.
              Passionate about creating clean, efficient, and user-friendly digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                View My Work
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600/10 rounded-lg transition-colors">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
              {/* Replace with your actual profile image */}
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'GraphQL', 'Git', 'Docker'].map((skill) => (
              <div key={skill} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm currently available for freelance work or full-time positions.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-lg font-medium transition-colors inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  )
} 