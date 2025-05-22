"use client";

import ProjectCard from './ProjectCard';

// Sample project data - in a real app, this would come from an API or database
const projectsData = [
  {
    id: 1,
    title: "Hotel Room Reservation System",
    description: "Engineered an optimal-booking algorithm (same-floor first; then minimize 1 min/room + 2 min/floor travel). Features: book 1–5 rooms, visualize occupancy, random occupancy, reset — all scaffolded via Cursor AI.",
    image: "/projects/HotalReservation.png",
    technologies: ["React", "Vite", "Node.js", "Express"],
    liveLink: "https://akshaybookings.vercel.app",
    githubLink: "https://github.com/akshayUniverse/hotel-booking"
  },
  {
    id: 2,
    title: "LocalTasker – SaaS Platform",
    description: "Built smart matching with OTP login, JWT auth, real-time chat and integrated COD/online payments.",
    image: "/projects/LocalTasker.png",
    technologies: ["MERN Stack", "WebSockets", "PrimeReact", "JWT"],
    liveLink: "https://localtasker.example.com",
    githubLink: "https://github.com/akshayUniverse/localtasker"
  },
  {
    id: 3,
    title: "Real-time Currency Converter",
    description: "Interactive currency converter with live exchange rates and API integration.",
    image: "/projects/CurrencyConvertor.png",
    technologies: ["JavaScript", "REST APIs", "HTML5", "CSS3"],
    liveLink: "https://currency-converter.example.com",
    githubLink: "https://github.com/akshayUniverse/currency-converter"
  },
  {
    id: 4,
    title: "Rock-Paper-Scissors Game",
    description: "Interactive game with score tracking and animations.",
    image: "/projects/RockPeparscissors.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    liveLink: "https://rps-game.example.com",
    githubLink: "https://github.com/akshayUniverse/rps-game"
  }
];

export default function Projects({ id }) {
  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900 dark:text-white">
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