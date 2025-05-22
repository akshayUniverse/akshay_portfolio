import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  const projects = [
    {
      id: 'project-1',
      title: 'Hotel Room Reservation System',
      description: 'Engineered an optimal-booking algorithm (same-floor first; then minimize 1 min/room + 2 min/floor travel). Features: book 1–5 rooms, visualize occupancy, random occupancy, reset — all scaffolded via Cursor AI.',
      technologies: ['React', 'Vite', 'Node.js', 'Express'],
      githubUrl: 'https://github.com/akshayUniverse/hotel-booking',
      liveUrl: 'https://akshaybookings.vercel.app',
      imageUrl: '/projects/HotalReservation.png'
    },
    {
      id: 'project-2',
      title: 'LocalTasker – SaaS Platform',
      description: 'Built smart matching with OTP login, JWT auth, real-time chat and integrated COD/online payments.',
      technologies: ['MERN Stack', 'WebSockets', 'PrimeReact', 'JWT'],
      githubUrl: 'https://github.com/akshayUniverse/localtasker',
      liveUrl: 'https://localtasker.example.com',
      imageUrl: '/projects/LocalTasker.png'
    },
    {
      id: 'project-3',
      title: 'Real-time Currency Converter',
      description: 'Interactive currency converter with live exchange rates and API integration.',
      technologies: ['JavaScript', 'REST APIs', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/akshayUniverse/currency-converter',
      liveUrl: 'https://currency-converter.example.com',
      imageUrl: '/projects/CurrencyConvertor.png'
    },
    {
      id: 'project-4',
      title: 'Rock-Paper-Scissors Game',
      description: 'Interactive game with score tracking and animations.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
      githubUrl: 'https://github.com/akshayUniverse/rps-game',
      liveUrl: 'https://rps-game.example.com',
      imageUrl: '/projects/RockPeparscissors.png'
    }
  ];

  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            A collection of my recent work. Each project presented unique challenges and opportunities to learn and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-56 bg-gray-200 dark:bg-gray-700 relative">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center text-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                      Code
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center text-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 