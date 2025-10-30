import './Skills.css'
import skillPhoto from '../assets/react-brands-solid-full.svg'
import SkillSection from './skill-section/SkillSection'

function Skills() {
  
 return (
    <section className="skills-technology">
            <div className="skills-content">
                <h2>Habilidades</h2>
                <SkillSection/>
                <SkillSection/>
                <SkillSection/>
                <SkillSection/>
            </div>
    </section>
  )
}

export default Skills