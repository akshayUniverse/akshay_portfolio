export default function AboutPage() {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

        <div className="space-y-8">
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm Akshay Karada, a full-stack developer and recent MCA graduate (May 2025), passionate about turning ideas into scalable, secure, and impactful web applications. Specializing in JavaScript, React, Node.js, and cloud technologies, I combine a strong academic foundation with hands-on project experience to deliver clean, reliable code.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I've built full-stack solutions like a Hotel Room Reservation System and a real-time SaaS platform, showcasing my ability to design seamless user experiences and robust backend systems. I'm open to opportunities and eager to contribute to innovative teams that value quality and growth.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I treat every project as a partnership, driven by:
            </p>
            <ul className="list-disc ml-5 mt-2 text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><span className="font-medium">User-Centered Design</span> – Prioritizing intuitive and enjoyable user experiences</li>
              <li><span className="font-medium">Clean Code</span> – Writing maintainable, scalable, and well-documented solutions</li>
              <li><span className="font-medium">Continuous Learning</span> – Keeping up with evolving technologies and best practices</li>
              <li><span className="font-medium">Effective Communication</span> – Ensuring clarity across all phases of development</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 