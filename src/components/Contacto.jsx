import "../styles/Contacto.css"
import { TfiPencilAlt } from "react-icons/tfi";
import { MdOutlineMapsHomeWork } from "react-icons/md";




function Contacto() {

    return (
        <>
            <h2 className="subtitulo">Contáctanos</h2>
            <section className="contactoForm">

                <div className="form-contacto">

                    <div>
                        <h3 className="subtitulo2">
                            Déjanos tus Datos
                            <TfiPencilAlt
                                style={{ marginLeft: "10px", color: "#b44173", fontSize: "25px" }}
                            />

                        </h3>
                        <p>
                            Para mayor información, personalización de productos o cualquier otra consulta puedes contactarnos cuando lo desees.
                        </p>

                        <p>Completa el formulario y te responderemos.</p>
                    </div>
                    <form className="form" action="https://formsubmit.co/stefanygct@gmail.com" method="POST">
                        <div className="item-form">
                            <label className="label-item" htmlFor="nombre">Nombre:</label>
                            <input className="input-item" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
                        </div>

                        <div className="item-form">
                            <label className="label-item" htmlFor="apellido">Apellido:</label>
                            <input className="input-item" type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" />
                        </div>

                        <div className="item-form">
                            <label className="label-item" htmlFor="telefono">Teléfono:</label>
                            <input className="input-item" type="text" name="telefono" id="telefono" placeholder="Ingrese su teléfono" required />
                        </div>

                        <div className="item-form">
                            <label className="label-item" htmlFor="email">E-mail:</label>
                            <input className="input-item" type="email" name="correo" id="correo" placeholder="Ingrese su correo" required />
                        </div>

                        <div className="item-form">
                            <label className="label-item" htmlFor="mensaje">Mensaje:</label>
                            <textarea className="textarea-form" name="mensaje" id="mensaje" cols={30} rows={7} placeholder="Ingrese su mensaje..."></textarea>
                        </div>

                        <button className="btn-contacto" type="submit">Enviar Mensaje</button>

                    </form>
                </div>

                <div className="contactoUbi">

                    <div>
                        <h3 className="subtitulo2">Visitanos en nuestro local..
                            <MdOutlineMapsHomeWork
                                style={{ marginLeft: "10px", color: "#b44173", fontSize: "25px" }}
                            />
                        </h3>

                        <p>
                            <span>Dirección:</span> Av. Presidente Juan Domingo Perón, San Miguel, Provincia de Buenos Aires.
                        </p>

                        <div className="mapa-container">
                            <iframe
                                title="Ubicación"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1245158695374!2d-58.71010912426279!3d-34.649982172943154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc57d2fa98ae5%3A0x1abf4e74016027f!2sAv.%20Pres.%20Juan%20Domingo%20Per%C3%B3n%2C%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1721487010065!5m2!1ses-419!2sar"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <p className="subtitulo3">
                        Contáctanos tambien por nuestro e-mail: <br /><span className="mail"> MiDulceGiane@gmail.com </span><br /> o por nuestras redes sociales...
                    </p>
 
                </div>
            </section>
        </>

    );

}

export default Contacto;
