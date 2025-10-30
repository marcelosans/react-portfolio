import '../Projects.css'
import ProjectPic from '../../assets/bobesponja.webp'

function ProjectItem() {
  
 return (  
      <div className="project-item">
                        <div className="img-project">
                            <img src={ProjectPic} alt="Foto de Marcel Lejk"/>
                        </div>
                        <div className="text-project">
                             <h3>Proyecto 2</h3>
                            <p>Descripción del proyecto 2.</p>
                        </div>
                        <div className="skills">
                            <div className="technology">
                                <i className="fa-brands fa-html5" style={{color: '#e34c26'}}></i>
                                <p>HTML</p>
                            </div>
                            <div className="technology">
                                <i className="fa-brands fa-html5" style={{color: '#e34c26'}}></i>
                                <p>CSS</p>
                            </div>
                        </div>
                         <div className="buttons-project">
                            <div className="button-liveDemo">
                                <a href="">Live demo</a>
                            </div>
                            <div className="button-github">
                                <a href="">Repositorio</a>
                            </div>
                        </div>
                    </div>
    
  )
}

export default ProjectItem
