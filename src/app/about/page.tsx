export default function AboutPage() {
  return (
    <main className="py-16 px-4 sm:px-8">
      <section id="about-detail" className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
        
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 mt-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img 
                src="/profile.jpg" 
                alt="Akshay Karada" 
                className="rounded-lg shadow-md w-full h-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Akshay+Karada';
                }}
              />
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm Akshay Karada, a passionate full-stack developer with a strong foundation in both frontend and backend technologies.
                With several years of experience building web applications, I specialize in creating responsive, 
                user-friendly digital experiences that solve real-world problems.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My journey in software development began with a degree in Computer Science, followed by
                continuous learning and practical experience across various technologies and frameworks.
                I enjoy tackling complex challenges and turning ideas into elegant, efficient code.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through technical blogs and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 