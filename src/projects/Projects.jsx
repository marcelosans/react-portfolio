import './Projects.css'
import ProjectItem from './project-item/ProjectItem'

function Projects() {
  
 return (
    
      <section className="projects">
            
                <div className="title-projects">
                     <h2>Mis Proyectos</h2>
                </div>
                <div className="project-category">
                    <h3>Web Apps</h3>
                    <h3>Mobile Apps</h3>
                    <h3>Other</h3>
                </div>
                <div className="projects-content">
                   <ProjectItem />
                   <ProjectItem />
                   <ProjectItem />
                   <ProjectItem />
                   <ProjectItem />
                   <ProjectItem />
                   <ProjectItem /> 
                </div>
        </section>
    
  )
}

export default Projects
