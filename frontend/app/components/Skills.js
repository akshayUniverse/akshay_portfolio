"use client";

// In a real application, you would fetch this data from an API or JSON file
const skillsData = {
  "Languages": ["JavaScript (ES6+)", "C++", "Java", "Python"],
  "Frameworks & Libraries": ["React", "Next.js", "Express.js"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL"],
  "Cloud & DevOps": ["AWS (EC2, Lambda, S3)", "Azure Fundamentals", "Docker", "Kubernetes", "CI/CD (GitHub Actions)"],
  "Tools & Others": ["Git", "VS Code", "Postman", "JWT", "REST APIs", "Cursor AI"],
  "Core Concepts": ["Data Structures & Algorithms", "Authentication", "API Design", "Information Security"]
};

export default function Skills({ id }) {
  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-base font-medium"
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