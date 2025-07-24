import "../styles/About.css"
import video from "../assets/video.mp4"

function About() {
    
    return (
      <section className="about">
        
          <h2 className="subtitulo-about">Sobre Nosotros</h2>
          <article className="about-text">
        <p>
          Nos especializamos en ofrecer
          las mejores tortas y dulces hechos con productos de la mas alta calidad y 
          por pasteleros especializados, con mucho amor por lo que hacen.
        </p>
        <p>
          Ya sea que estés buscando alguna torta o dulces para tus fiestas, eventos, regalos o simplemente compartir con amigos, en nuestra tienda encontrarás lo que necesitas.
        </p>

        <p>
          Endulzarte la vida con deliciosas tortas y dulces es una experiencia que va más allá de simplemente satisfacer un antojo. Cada mordisco es un viaje al placer culinario, donde la combinación de ingredientes frescos y recetas tradicionales se unen para crear obras maestras de sabor y textura. Desde una clásica torta de chocolate hasta un innovador pastel de frutas exóticas, estas delicias son capaces de transformar cualquier momento en una celebración. Además, la repostería tiene el poder de reunir a las personas, ya sea en una fiesta de cumpleaños, una reunión familiar o un simple café con amigos. Así que, la próxima vez que busques un toque de dulzura en tu día, recuerda que detrás de cada torta y dulce hay una historia de dedicación y amor por el arte de la repostería.
        </p>
        </article>

        <article className="about-video">
          <video className="video" src={video} controls="controls" autoplay="true" />   
       </article>        

      </section>
      
      
    );
  }
  
export default About;