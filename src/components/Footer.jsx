import "../styles/Footer.css"
import imgFac from "../assets/Facebook.png"
import imgInst from "../assets/Instagram.png"
import imgTkt from "../assets/Tiktok.png"
import imgWhat from "../assets/Whatsapp.png"
import imgUbi from "../assets/Ubicacion.png"
import imgLogo from "../assets/Logo2.png"



function Footer() {  
    return (  
        <footer className="footer">
      <div className="copy">
        <p>&copy; Copyright2025</p>
        <p>
          Todos los derechos reservados. <br />
          Mi Dulce Giane
        </p>
      </div>
      <div className="ico-rrss">
        <p className="follow">Síguenos en:</p>
        <a href="https://www.facebook.com/?locale=es_LA"
          ><img className="img-iconos" src={imgFac} alt="Logo Facebook"
        /></a>
        <a href="https://www.instagram.com/"
          ><img className="img-iconos" src={imgInst} alt="Logo Instagram"
        /></a>
        <a href="https://www.tiktok.com/"
          ><img className="img-iconos" src={imgTkt} alt="Logo Tiktok"
        /></a>
        <a href="https://www.whatsapp.com/?lang=es_LA"
          ><img className="img-iconos" src={imgWhat} alt="Logo Whastapp"
        /></a>
      </div>
      <div className="log-ubi">
        
          <a href="https://maps.app.goo.gl/hj39mznTLHX31ZtNA"
          ><img className="img-ubi" src={imgUbi} alt=""
        /></a>

        <img className="img-logo-footer" src={imgLogo} alt="" />

      </div>
    </footer>  
    );  
}  

export default Footer;  