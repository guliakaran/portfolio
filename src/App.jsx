import { useEffect } from 'react'
import Nav from './components/Nav'
import ProgressBar from './components/ProgressBar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stack from './components/Stack'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage from './components/ProjectPage'
import { projectFromHash } from './data/projects'
import { useHash } from './hooks/useHash'

export default function App() {
  const hash = useHash()
  const project = projectFromHash(hash)

  useEffect(() => {
    document.title = project
      ? `${project.title} — Karan Gulia`
      : 'Karan Gulia — Software Developer'

    if (project) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    if (!id || id.startsWith('project/')) return
    document.getElementById(id)?.scrollIntoView()
  }, [hash, project])

  return (
    <>
      <div className="grain" />
      <ProgressBar />
      <Nav />
      {project ? (
        <ProjectPage project={project} />
      ) : (
        <main id="top">
          <Hero />
          <Marquee />
          <Stack />
          <Work />
          <Testimonials />
          <Process />
          <FAQ />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}
