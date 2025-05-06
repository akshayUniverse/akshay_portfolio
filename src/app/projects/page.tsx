export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://via.placeholder.com/800x600?text=E-commerce+Platform',
      github: 'https://github.com/akshaykarada/ecommerce-platform',
      demo: 'https://ecommerce-platform-demo.vercel.app'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'A task management application with features for creating tasks, setting priorities, organizing with tags, and tracking progress. Built with React and Firebase.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Authentication'],
      image: 'https://via.placeholder.com/800x600?text=Task+Manager+App',
      github: 'https://github.com/akshaykarada/task-manager',
      demo: 'https://task-manager-demo.vercel.app'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that provides current weather information and forecasts for multiple locations. Uses OpenWeatherMap API and features a responsive design.',
      tags: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
      image: 'https://via.placeholder.com/800x600?text=Weather+Dashboard',
      github: 'https://github.com/akshaykarada/weather-dashboard',
      demo: 'https://weather-dash-demo.vercel.app'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'A fitness tracking application that helps users monitor workouts, set goals, and track progress. Built with the MERN stack and includes data visualization features.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      image: 'https://via.placeholder.com/800x600?text=Fitness+Tracker',
      github: 'https://github.com/akshaykarada/fitness-tracker',
      demo: 'https://fitness-tracker-demo.vercel.app'
    }
  ];

  return (
    <main className="py-16 px-4 sm:px-8">
      <section id="projects-detail" className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 