import './Header.css';
import github from '../assets/github-brands-solid-full.svg';
import linkedin from '../assets/square-linkedin-brands-solid-full (1).svg';

function Header() {
  
 return (
    
      <header>
            <div className="header-content">
                <h2>Hola, soy Marcel Lejk</h2>
                <h3>Desarrollador Web Full Stack</h3>  
            </div>
            
            <div className="cv-button">
                <a href="">Descarga Mi CV</a>
            </div>

            <div className="social-header">
                <div className="social-icon">
                    <img src={github} alt="" />
                    <a href="https://www.youtube.com/"> </a>
                </div>
                <div className="social-icon">
                    <img src={linkedin} alt="" />
                    <a href="https://www.youtube.com/"> </a>
                </div>
                
            </div>
           

        </header>
  )
}

export default Header