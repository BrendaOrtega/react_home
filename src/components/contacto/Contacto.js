/**
 * Created by brendaortega on 04/04/17.
 */
import React from 'react';
import css from './Contacto.css';
import Nav from '../nav/Nav';

class Contacto extends React.Component{
    render(){
        return(
            <div>
                <div className={css.back}>
                    <Nav />
                </div>
                <div className={'row'}>
                    <div className={css.map + ' col-lg-4 col-lg-offset-1 '}>
                        <iframe className={css.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.9910732526796!2d-98.80388768503683!3d20.134420023080985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a125b9171db7%3A0xf0ef93b8ffdce18c!2sFixTeR!5e0!3m2!1ses-419!2smx!4v1492123614514" allowfullscreen></iframe>
                    </div>
                    <div className={css.form + ' col-lg-4 col-lg-offset-2 '}>
                        <h3 className={css.tittle}>Si deseas mas informacion, completa el formulario</h3>
                        <form method="post" name="sentMessage" action="">
                            <div className={css.formgroup}>
                                <div className={css.inp}>
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <input type="text" name="nombre" className={css.formcontrol} placeholder="Nombre" id="name" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                <p className="help-block text-danger"></p></div>
                            </div>
                            <div className={css.formgroup}>
                                <div className={css.inp}>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <input type="email" name="email" className={css.formcontrol} placeholder="Email" id="email" required data-validation-required-message="Porfavor ingresa tu e-mail"/>
                                    <p className="help-block text-danger"></p></div>
                            </div>
                            <div className={css.formgroup}>
                                <div className={css.inp}>
                                    <i className="fa fa-phone" aria-hidden="true"></i>

                                    <input type="tel" name="tel" className={css.formcontrol} placeholder="Telefono" id="phone" required data-validation-required-message="Porfavor ingresa tu numero telefonico"/>
                                    <p className="help-block text-danger"></p></div>
                            </div>
                            <div className={css.formgroup}>
                                <p>Desea recibir informacion de nuestros servicios:</p>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="checkboxSuccess" value="option1" />
                                        Desarrollo de software
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="checkboxSuccess" value="option1" />
                                        Diseno Web
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="checkboxSuccess" value="option1" />
                                        Apps moviles
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="checkboxSuccess" value="option1" />
                                        <p>Hosting y dominios</p>
                                    </label>
                                </div>
                            </div>




                            <div className={css.formgroup}>
                                <div className={css.area}>
                                    <div className={css.msj}>
                                    <i className="fa fa-commenting" aria-hidden="true"></i></div>

                                    <textarea type="text" name="msj" className={css.formcontrol} placeholder="Mensaje" id="message" required data-validation-required-message="Porfavor ingresa tu mensaje"/>
                                    <p className="help-block text-danger"></p></div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}
export default Contacto;