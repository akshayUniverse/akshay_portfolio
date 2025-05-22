import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Skills id="skills" />
      <Projects id="projects" />
      <Education id="education" />
      <Certifications id="certifications" />
      <Footer />
    </main>
  )
} 