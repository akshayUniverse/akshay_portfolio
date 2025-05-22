export default function AboutPage() {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

        <div className="space-y-8">
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm Akshay Karada, a recent MCA graduate (May 2025) and passionate full-stack developer specializing in modern JavaScript and cloud technologies. With hands-on experience building responsive React and Next.js applications, I focus on clean, maintainable code and seamless user experiences.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I thrive on tackling real-world challenges—whether optimizing backend performance with Node.js/Express or delivering pixel-perfect UIs. My academic projects, like my{' '}
              <a 
                href="https://akshaybookings.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Hotel Room Reservation System
              </a>
              , showcase my ability to architect end-to-end solutions that are both scalable and secure.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Open to work and eager to join a dynamic team, I bring a strong foundation in advanced web technologies, cloud computing, and information security. Let's create impactful software together!
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I approach each project as a unique challenge, taking the time to understand the specific needs and goals before diving into development. I believe in:
            </p>
            <ul className="list-disc ml-5 mt-2 text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><span className="font-medium">User-Centered Design:</span> Prioritizing the end-user experience above all</li>
              <li><span className="font-medium">Clean Code:</span> Writing maintainable, well-documented code</li>
              <li><span className="font-medium">Continuous Learning:</span> Staying updated with the latest technologies and best practices</li>
              <li><span className="font-medium">Effective Communication:</span> Maintaining clear communication throughout the development process</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 