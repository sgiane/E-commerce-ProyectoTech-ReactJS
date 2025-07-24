import img1 from "../assets/imagen1.png"
import img2 from "../assets/imagen2.png"
import img3 from "../assets/imagen3.png"
import img4 from "../assets/imagen4.png"
import img5 from "../assets/imagen5.png"
import img6 from "../assets/imagen6.png"
import "../styles/Main.css"


function Main() {  
    return (  
        // <main style={{ padding: "20px" }}>  
        <main>
           <div className="content-main">
           <h1 className="titulo-bienvenida">
            Las Mejores Tortas y Dulces para tus fiestas, eventos y
            mucho mas en un solo lugar...
          </h1> 
          <div className="gallery">
            <img className="img-gallery" src={img1} alt="Torta Imposible" />
            <img className="img-gallery" src={img2} alt="Torta Tres Leches" />
            <img className="img-gallery" src={img3} alt="Marquesa de Chocolate" />
            <img className="img-gallery" src={img4} alt="Chocotorta" />
            <img className="img-gallery" src={img5} alt="Torta de Golosinas" />
            <img className="img-gallery" src={img6} alt="Torta de Chocolate y Crema" />
          </div>
           </div>

        </main>  
    );  
}  
export default Main; 