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

export default function App() {
  return (
    <>
      <div className="grain" />
      <ProgressBar />
      <Nav />
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
      <Footer />
    </>
  )
}
