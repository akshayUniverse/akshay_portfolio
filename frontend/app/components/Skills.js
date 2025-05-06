"use client";

// In a real application, you would fetch this data from an API or JSON file
const skillsData = {
  "Frontend": ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Responsive Design"],
  "Backend": ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "Firebase"],
  "DevOps & Tools": ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Jest", "Postman"]
};

export default function Skills({ id }) {
  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 