import imagen from "../assets/Logo2.png"
import "../styles/Header.css"

function Header() {  
    
    return ( 
        <header className="header">  
            <img className="img-logo" src= {imagen} alt="Logo" />  
            <div className="titulo-header">
                <p className="titulo">Mi Dulce Giane</p>
                <p className="sub-titulo">Endulzándote la Vida...</p>
            </div>
        </header>  
    );  
}  

export default Header;