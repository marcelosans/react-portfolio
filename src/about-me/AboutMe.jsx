import './AboutMe.css'
import profile from '../assets/bobesponja.webp'


function AboutMe() {
  
 return (
    <section className="about-me">
            <h1>Acerca de mí</h1>
            <div className="mid-about">
                <div className="about-me-content">
                    <p>
                        Soy un desarrollador web full stack apasionado por crear experiencias digitales funcionales, modernas y centradas en el usuario. Desde mis primeros proyectos, descubrí que el código no solo es una herramienta técnica, sino también una forma de expresar creatividad y resolver problemas reales. Me motiva la idea de transformar una simple idea en una aplicación útil y visualmente atractiva.
                        </p>
                        <br/>
                        <p>
                        Trabajo con tecnologías como HTML, CSS, JavaScript, Angular, Node.js y bases de datos SQL y NoSQL, manteniéndome siempre al día con las últimas tendencias del desarrollo web. Además, tengo experiencia en la creación de aplicaciones móviles y videojuegos, lo que me permite combinar el diseño, la lógica y la interactividad de una manera única.
                        </p>
                        <br/>
                        <p>
                        Me considero una persona curiosa, proactiva y en constante aprendizaje. Disfruto enfrentando nuevos desafíos y colaborando con otros desarrolladores o diseñadores para lograr resultados de calidad. Mi objetivo es seguir creciendo profesionalmente, aportar soluciones eficientes e innovadoras y contribuir a proyectos que realmente marquen la diferencia.
                        </p>
                </div>
                <div className="image-about-me">
                    <img src={profile} alt="Foto de Marcel Lejk"/>
                </div>
            </div>
    </section>
  )
}

export default AboutMe