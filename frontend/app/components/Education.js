"use client";

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    institution: "Mahakal Institute of Technology and Management, Ujjain / RGPV University, Bhopal",
    details: "CGPA: 7.47",
    duration: "2025",
    description: "Currently pursuing MCA with focus on Advanced Web Technology, Cloud Computing, and Information Security."
  },
  {
    id: 2,
    degree: "B.Sc. in Computer Science",
    institution: "Helios College / Vikram University, Ujjain",
    details: "Percentage: 66.73%",
    duration: "2021",
    description: "Completed undergraduate studies with focus on core computer science concepts and programming fundamentals."
  }
];

export default function Education({ id }) {
  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          Education
        </h2>
        
        <div className="space-y-8">
          {educationData.map(education => (
            <div 
              key={education.id}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {education.degree}
                </h3>
                <span className="text-xl text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {education.duration}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-2xl font-medium text-gray-800 dark:text-gray-200">
                  {education.institution}
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  {education.details}
                </p>
              </div>
              
              <p className="text-xl text-gray-700 dark:text-gray-300">
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 