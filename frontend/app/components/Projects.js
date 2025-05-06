"use client";

import ProjectCard from './ProjectCard';

// Sample project data - in a real app, this would come from an API or database
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveLink: "https://ecommerce-project.example.com",
    githubLink: "https://github.com/akshayUniverse/ecommerce-project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates and team features.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
    liveLink: "https://task-manager.example.com",
    githubLink: "https://github.com/akshayUniverse/task-manager"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting app with location-based services.",
    image: "/projects/weather.jpg",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation API"],
    liveLink: "https://weather-app.example.com",
    githubLink: "https://github.com/akshayUniverse/weather-app"
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Content management system with markdown support and user authentication.",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS"],
    liveLink: "https://blog-platform.example.com",
    githubLink: "https://github.com/akshayUniverse/blog-platform"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    liveLink: "https://akshay-portfolio.example.com",
    githubLink: "https://github.com/akshayUniverse/portfolio"
  }
];

export default function Projects({ id }) {
  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 