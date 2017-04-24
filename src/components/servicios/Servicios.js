import React from "react";
import css from './Servicios.css';
import cel from '../../assets/cel-01.png';
import lap from '../../assets/lap2.png';
import laptop from '../../assets/compu-01.png';
import server from '../../assets/servidor-01.png';


class Servicios extends React.Component {
    render(){
        return (

            <div className={css.service }>
                <h3 className={css.tittle + ' bot '} >Servicios</h3>

                <div className="row col-lg-10 col-lg-offset-1">

                    <div className={css.col + ' col-lg-6 col-md-6 col-sm-6 col-xs-12 left'}>
                        <div className={css.svc}>
                            <img className={css.icon} src={lap} alt=""/>
                            <h3 className={css.name}>Desarrollo de Software</h3>
                            <p className={css.description}>Desarrollamos apps que cubren las necesidades de tu empresa o start up, fáciles de usar, optimizadas, escalables y desarrolladas con tecnologías modernas y seguras. </p>
                        </div>
                    </div>
                    <div className={css.col + ' col-lg-6 col-md-6 col-sm-6 col-xs-12 right'}  >
                        <div className={css.svcs}>
                            <img className={css.icon} src={laptop} alt=""/>
                            <h3  className={css.name}>Diseño Web</h3>
                            <p  className={css.description}>Los sitios web son diseñados para transmitir a tus clientes la esencia de tu empresa de una forma atractiva, intuitiva, y lista para consultarse desde cualquier dispositivo.</p>
                        </div>
                    </div>
                </div>
                    <div className="row col-lg-10 col-lg-offset-1">
                        <div className={css.col + ' col-lg-6 col-md-6 col-sm-6 col-xs-12 left'} >
                            <div className={css.sv}>
                                <img className={css.icon} src={cel} alt=""/>
                                <h3  className={css.name}>Aplicaciones Móviles</h3>
                                <p  className={css.description}>Desarrollamos aplicaciones nativas para IOS, Android y Windows Phone, volviendo la experiencia del usuario más atractiva, ágil e intuitiva; además de apps híbridas.</p>
                            </div>
                        </div>
                        <div className={css.col + ' col-lg-6 col-md-6 col-sm-6 col-xs-12 right'} >
                            <div className={css.svs}>
                                <img className={css.icon} src={server} alt=""/>
                                <h3  className={css.name}>Hosting y dominios</h3>
                                <p  className={css.description}>Cansado de perder información en servidores locales? Te ayudamos a hostear tus apps web, respaldar bases de datos, crear subdominios, redes y más. </p>
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
