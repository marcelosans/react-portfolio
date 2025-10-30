import './Navbar.css'

function Navbar() {

    const abrirMenuMobil = () => {
        console.log("Paco es gay");
        var id = "mobile";
        document.getElementById(id).style.display = "flex";
    }

    const cerrarMenuMobil = () => {
        console.log("Paco no es gay");
        var id = "mobile";
        document.getElementById(id).style.display = "none";
    }

  
 return (
    <>
      <div className="navbar-mobile" id="mobile">
                                <div className="nav-cross-mobile">
                                    <i onClick={cerrarMenuMobil} className="fa-solid fa-xmark fa-2xl" style={{color: '#ffffff'}}></i>
                                </div>
                                <div className="nav-mobile-links">
                                    <ul>
                                    <li><a href="">Acerca de mí</a></li>
                                    <li><a  href="">Proyectos</a></li>
                                    <li><a  href="">Habilidades</a></li>
                                    <li><a  href="">Educacion</a></li>
                                    <li><a  href="">Experiencia Laboral</a></li>
                                    </ul>
                                </div>
                                <div className="contact-button-mobile">
                                    <a href="">Contáctame</a>
                                </div>
        </div>   
        <div className="navbar">
            <div className="logo-navbar" id="logo-navbar">
                <h1>Marcel Lejk</h1>
            </div>
                <div className="navbar-menu">
                            <div className="navbar-links">  
                                <ul>
                                <li><a href="">Acerca de mí</a></li>
                                <li><a href="">Proyectos</a></li>
                                <li><a href="">Habilidades</a></li>
                                <li><a href="">Educacion</a></li>
                                <li><a href="">Experiencia Laboral</a></li>
                                </ul>
                            </div>

                            <div className="contact-button">
                                <a href="">Contáctame</a>
                            </div>

                            <div className="nav-hamburger" id="hamburger">
                                <i  onClick={abrirMenuMobil} className="fa-solid fa-bars fa-2xl" style={{color: '#ffffff'}}></i>
                            </div>    
                </div>              
        </div> 
    </>
  )
}

export default Navbar
