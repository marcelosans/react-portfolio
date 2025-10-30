import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './navbar/Navbar.jsx'
import Header from './header/Header.jsx'
import AboutMe from './about-me/AboutMe.jsx'
import Projects from './projects/Projects.jsx'
import Skills from './skills/Skills.jsx'
import Education from './education/Education.jsx'
import WorkExperience from './work-experience/WorkExperience.jsx'
import Footer from './Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Header />
    <AboutMe />
    <Projects />
    <Skills/>
    <Education/>
    <WorkExperience/>
    <Footer/>

  </StrictMode>,
)
