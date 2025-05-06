import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'project-2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'project-3',
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current weather conditions and forecasts using external APIs.',
      technologies: ['React', 'Redux', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'project-4',
      title: 'Blog Platform',
      description: 'A content management system for creating and managing blog posts with user authentication and admin dashboard.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Vercel'],
      githubUrl: 'https://github.com',
    },
    {
      id: 'project-5',
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills. Features responsive design and dark mode support.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 'project-6',
      title: 'Real-time Chat Application',
      description: 'A messaging platform with real-time communication, user presence indicators, and media sharing capabilities.',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com',
    }
  ];

  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            A collection of my recent work. Each project presented unique challenges and opportunities to learn and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 dark:text-gray-500 flex items-center justify-center w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
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
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
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