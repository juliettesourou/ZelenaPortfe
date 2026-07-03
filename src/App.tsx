import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-[#200F0D]'>
      <Navbar />

      <div id='home' className='section-shell'>
        <Home />
      </div>

      <div id='services' className='section-shell section-block'>
        <Services />
      </div>

      <div id='projects' className='section-shell section-block'>
        <Projects />
      </div>

      <div id='skills' className='section-shell section-block'>
        <Experiences />
      </div>

      <Contact />
      <Footer />
    </div>
  )
}

export default App
