import img1 from "../assets/imagen1.png"
import img2 from "../assets/imagen2.png"
import img3 from "../assets/imagen3.png"
import img4 from "../assets/imagen4.png"
import img5 from "../assets/imagen5.png"
import img6 from "../assets/imagen6.png"
import img7 from "../assets/imagen7.jpg"
import img8 from "../assets/imagen8.jpg"
import img9 from "../assets/imagen9.png"

import "../styles/Main.css"


function Main() {
  return (

    // <main>
    //   <div className="content-main">
    //     <h1 className="titulo-bienvenida">
    //       Las Mejores Tortas y Dulces para tus fiestas, eventos y
    //       mucho mas en un solo lugar...
    //     </h1>

    //   </div>

    //   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         <div className="d-flex justify-content-center flex-wrap">
    //           <img src={img1} className="carousel-img mx-2" alt="..." />
    //           <img src={img2} className="carousel-img mx-2" alt="..." />
    //           <img src={img3} className="carousel-img mx-2" alt="..." />
    //         </div>
    //       </div>
        
    //     <div class="carousel-item">
    //       <div className="d-flex justify-content-center flex-wrap">
    //         <img src={img4} className="carousel-img mx-2" alt="..." />
    //         <img src={img5} className="carousel-img mx-2" alt="..." />
    //         <img src={img6} className="carousel-img mx-2" alt="..." />
    //       </div>
    //     </div>
    //   <div class="carousel-item">
    //     <div className="d-flex justify-content-center flex-wrap">
    //       <img src={img7} className="carousel-img mx-2" alt="..." />
    //       <img src={img8} className="carousel-img mx-2" alt="..." />
    //       <img src={img9} className="carousel-img mx-2" alt="..." />
    //     </div>
    //   </div>
    //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>

    //     </div >

    // </main >

    <main>
  <div className="content-main">
    <h1 className="titulo-bienvenida">
      Las Mejores Tortas y Dulces para tus fiestas, eventos y mucho más en un solo lugar...
    </h1>
  </div>

  {/* ✅ Carrusel ESCRITORIO: 3 imágenes por slide */}
  <div className="carousel slide d-none d-lg-block" id="carouselDesktop" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-flex justify-content-center">
          <img src={img1} className="carousel-img" />
          <img src={img2} className="carousel-img" />
          <img src={img3} className="carousel-img" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-flex justify-content-center">
          <img src={img4} className="carousel-img" />
          <img src={img5} className="carousel-img" />
          <img src={img6} className="carousel-img" />
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselDesktop" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselDesktop" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>

  {/* ✅ Carrusel TABLET: 2 imágenes por slide */}
  <div className="carousel slide d-none d-md-block d-lg-none" id="carouselTablet" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-flex justify-content-center">
          <img src={img1} className="carousel-img" />
          <img src={img2} className="carousel-img" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-flex justify-content-center">
          <img src={img3} className="carousel-img" />
          <img src={img4} className="carousel-img" />
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselTablet" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselTablet" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>

  {/* ✅ Carrusel MÓVIL: 1 imagen por slide */}
  <div className="carousel slide d-block d-md-none" id="carouselMobile" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active text-center">
        <img src={img1} className="carousel-img" />
      </div>
      <div className="carousel-item text-center">
        <img src={img2} className="carousel-img" />
      </div>
      <div className="carousel-item text-center">
        <img src={img3} className="carousel-img" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselMobile" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselMobile" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
</main>

  );
}
export default Main;

