import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Skills from '@/app/components/Skills'
import Projects from '@/app/components/Projects'
import Certificates from '@/app/components/Certificates'
import Contact from '@/app/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  )
}
