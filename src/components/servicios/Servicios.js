import React from "react";
import css from './Servicios.css';
import './Servicios.css';


class Servicios extends React.Component {
    render(){
        return (

            <div className={css.service}>
                <h3 className={css.tittle}>Servicios</h3>

                <div className="row col-lg-10 col-lg-offset-1">

                    <div className={css.col + ' col-lg-6 '} >
                        <div className={css.svc}>
                            <img className={css.icon} src="https://www.fixter.camp/static/assets/images/lap2-01.png" alt=""/>
                            <h3>Desarrollo Web</h3>
                            <p>El sitio web que siempre sonaste, no mas wix ni wordprees. Tu sueno hecho realidad. El sitio web que siempre sonaste, no mas wix ni wordprees. Tu sueno hecho realidad.</p>
                        </div>
                    </div>
                    <div className={css.col + ' col-lg-6 '} >
                        <div className={css.svcs}>
                            <img className={css.icon} src="https://www.fixter.camp/static/assets/images/lap2-01.png" alt=""/>
                            <h3>Desarrollo Web</h3>
                            <p>El sitio web que siempre sonaste, no mas wix ni wordprees. Tu sueno hecho realidad. El sitio web que siempre sonaste, no mas wix ni wordprees. Tu sueno hecho realidad.</p>
                        </div>
                    </div>
                </div>
                    <div className="row col-lg-10 col-lg-offset-1">
                        <div className={css.col + ' col-lg-6 '} >
                            <div className={css.sv}>
                                <img className={css.icon} src="https://www.fixter.camp/static/assets/images/lap2-01.png" alt=""/>
                                <h3>Desarrollo Web</h3>
                                <p>El sitio web que siempre sonaste, no mas wix ni wordprees. Tu sueno hecho realidad. El sitio web que siempre sonaste, no mas wix ni wordprees. Tu sueno hecho realidad.</p>
                            </div>
                        </div>
                        <div className={css.col + ' col-lg-6 '} >
                            <div className={css.svs}>
                                <img className={css.icon} src="https://www.fixter.camp/static/assets/images/lap2-01.png" alt=""/>
                                <h3>Desarrollo Web</h3>
                                <p>El sitio web que siempre sonaste, no mas wix ni wordprees. Tu sueno hecho realidad. El sitio web que siempre sonaste, no mas wix ni wordprees. Tu sueno hecho realidad.</p>
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
