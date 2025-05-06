export default function Steps({ id }) {
  const steps = [
    {
      number: 1,
      title: "Education",
      description: "Computer Science degree with specialization in web technologies and software engineering principles.",
      bullets: [
        "Bachelor's in Computer Science",
        "Advanced courses in web development",
        "Data structures and algorithms",
        "Software engineering principles"
      ]
    },
    {
      number: 2,
      title: "Frontend Development",
      description: "Mastering modern frontend technologies to create intuitive and responsive user interfaces.",
      bullets: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "React.js ecosystem",
        "Responsive design principles",
        "UI/UX best practices"
      ]
    },
    {
      number: 3,
      title: "Backend Development",
      description: "Building robust server-side applications and RESTful APIs to power web applications.",
      bullets: [
        "Node.js and Express.js",
        "Database design and implementation",
        "API development",
        "Authentication and security"
      ]
    },
    {
      number: 4,
      title: "DevOps & Cloud",
      description: "Implementing CI/CD pipelines and cloud infrastructure for seamless deployment.",
      bullets: [
        "Version control with Git",
        "CI/CD pipelines",
        "Docker containerization",
        "AWS and cloud services"
      ]
    },
    {
      number: 5,
      title: "Full-Stack Mastery",
      description: "Combining all skills to develop complete, production-ready applications.",
      bullets: [
        "End-to-end application architecture",
        "Performance optimization",
        "Testing and QA",
        "Project management"
      ]
    }
  ];

  return (
    <section id={id} className="py-24 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gray-900">
          My Journey
        </h2>
        
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Number Circle */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-700 mb-4">{step.description}</p>
                
                {/* Bullet points */}
                <ul className="text-left space-y-2 text-gray-700">
                  {step.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-blue-100 mr-2 mt-1"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 