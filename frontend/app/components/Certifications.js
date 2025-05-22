"use client";

const certificationsData = [
  {
    id: 1,
    title: "NCC B-Certificate",
    description: "Completed the NCC B-Certificate training program, demonstrating leadership and discipline.",
    icon: "🏅"
  },
  {
    id: 2,
    title: "freeCodeCamp Certifications",
    description: "Currently pursuing Responsive Web Design & APIs & Microservices certifications.",
    icon: "📚"
  },
  {
    id: 3,
    title: "Academic Excellence",
    description: "Mathematics: 94% (10th), 97% (12th)",
    icon: "🎯"
  }
];

export default function Certifications({ id }) {
  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          Certifications & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map(cert => (
            <div 
              key={cert.id}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                {cert.title}
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 