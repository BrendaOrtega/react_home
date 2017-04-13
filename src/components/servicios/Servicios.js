import React from "react";
import css from './Servicios.css';
import './Servicios.css';


class Servicios extends React.Component {
    render(){
        return (

            <div className={css.service}>
                <h3 className={css.tittle + ' bot '} >Servicios</h3>

                <div className="row col-lg-10 col-lg-offset-1">

                    <div className={css.col + ' col-lg-6 col-md-6 col-sm-6 col-xs-12 left'}>
                        <div className={css.svc}>
                            <img className={css.icon} src="https://www.fixter.camp/static/assets/images/lap2-01.png" alt=""/>
                            <h3>Desarrollo de Software</h3>
                            <p>Desarrollamos apps que cubran las necesidades de tu empresa o start up, faciles de usar, optimizadas, escalables y desarrollados con tecnologias modernas y seguras </p>
                        </div>
                    </div>
                    <div className={css.col + ' col-lg-6 col-md-6 col-sm-6 col-xs-12 right'}  >
                        <div className={css.svcs}>
                            <img className={css.icon} src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/17917582_1254093611352691_7189436867748593216_o.jpg?oh=7a2e66279c1fc6d2b4e3e7cf44955274&oe=599291F9" alt=""/>
                            <h3>Diseno Web</h3>
                            <p>Los sitios web son disenados para que transmitas a tus clientes la escencia de tu empresa de una forma visualmente atractiva, intuitiva, y lista para consultarse desde cualquier dispositivo</p>
                        </div>
                    </div>
                </div>
                    <div className="row col-lg-10 col-lg-offset-1">
                        <div className={css.col + ' col-lg-6 col-md-6 col-sm-6 col-xs-12 left'} >
                            <div className={css.sv}>
                                <img className={css.icon} src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/17917841_1254093618019357_5040472570898697793_o.jpg?oh=4d5ca07031b85eb2d9b3f4d1cbd92c3f&oe=59837291" alt=""/>
                                <h3>Aplicaciones Moviles</h3>
                                <p>Desarrollamos aplicaciones nativas para IOS, Android y Windows Phone, volviendo la experiencia del usuario ,as atractiva, agil e intuitiva; ademas de apps multiplataforma</p>
                            </div>
                        </div>
                        <div className={css.col + ' col-lg-6 col-md-6 col-sm-6 col-xs-12 right'} >
                            <div className={css.svs}>
                                <img className={css.icon} src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/17855216_1254093614686024_5551902381047676611_o.jpg?oh=cbcd31cc8d6e0be258f9d6cfcf052d51&oe=59920840" alt=""/>
                                <h3>Hosting y dominios</h3>
                                <p>Cansado de perder informacion en servidores locales? te ayudamos a hostear tus apps web, respaldar bases de datos, crear subdominios, y mas</p>
                            </div>
                        </div>
                    </div>
            </div>

        );
    }
}

export default Servicios;/**
 * Created by brendaortega on 04/04/17.
 */
