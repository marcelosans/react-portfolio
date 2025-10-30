import '../Skills.jsx'
import '../Skills.css'
import SkillIcon from './SkillIcon.jsx'


function SkillSection() {
  
 return (
     <div className="skill-section">
                    <div className="title-section">
                        <h3>Front-end</h3>
                    </div>
                    <div class="skill-icons">
                        <SkillIcon/>
                        <SkillIcon/>
                        <SkillIcon/>
                    </div>
    </div>      
  )
}

export default SkillSection