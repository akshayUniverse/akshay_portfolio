export default function AboutPage() {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        
        <div className="space-y-8">
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Hello! I'm Akshay Karada, a passionate Full-Stack Developer with a deep love for creating 
              elegant, efficient, and user-friendly web applications. My journey in the world of coding 
              started with curiosity and has evolved into a fulfilling professional career.
            </p>
            <p>
              With several years of experience in web development, I specialize in building modern, 
              responsive applications using cutting-edge technologies. I'm particularly skilled in the 
              JavaScript ecosystem, including React, Next.js, Node.js, and various database technologies.
            </p>
            <p>
              I believe in writing clean, maintainable code and following best practices in software 
              development. My goal with every project is to create solutions that not only look great but 
              also provide exceptional user experiences and solve real problems.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-1">
                <h3 className="font-medium">Bachelor of Technology in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-400">University of Engineering & Technology</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2016 - 2020</p>
              </div>
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-1">
                <h3 className="font-medium">Web Development Bootcamp</h3>
                <p className="text-gray-600 dark:text-gray-400">Coding Academy</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2020</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-1">
                <h3 className="font-medium">Senior Full-Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">Tech Innovations Inc.</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2022 - Present</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                  <li>Lead development of company's flagship SaaS product</li>
                  <li>Mentor junior developers and review code</li>
                  <li>Implement modern CI/CD pipelines and development workflows</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-1">
                <h3 className="font-medium">Web Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">Digital Solutions Ltd.</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2020 - 2022</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
                  <li>Developed and maintained multiple client websites</li>
                  <li>Collaborated with design team to implement responsive UIs</li>
                  <li>Optimized application performance and accessibility</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I approach each project as a unique challenge, taking the time to understand the specific needs and goals before diving into development. I believe in:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
              <li><span className="font-medium">User-Centered Design:</span> Prioritizing the end-user experience above all</li>
              <li><span className="font-medium">Clean Code:</span> Writing maintainable, well-documented code</li>
              <li><span className="font-medium">Continuous Learning:</span> Staying updated with the latest technologies and best practices</li>
              <li><span className="font-medium">Effective Communication:</span> Maintaining clear communication throughout the development process</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
} 