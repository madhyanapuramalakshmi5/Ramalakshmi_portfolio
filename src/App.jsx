import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ParticlesBackground } from './components/ParticlesBackground'
import { ThemeProvider } from './context/ThemeContext'
import { initEmailJS } from './utils/email'

function App() {
  useEffect(() => {
    // Initialize EmailJS
    initEmailJS()
  }, [])

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Animated Background */}
        <ParticlesBackground />

        {/* Main Content */}
        <div className="relative z-10">
          {/* Navigation */}
          <Navbar />

          {/* Main Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Internship />
            <Certifications />
            <Achievements />
            <GitHubStats />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
