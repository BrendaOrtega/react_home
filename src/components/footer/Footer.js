import React from 'react';
import css from './Footer.css';

class Footer extends React.Component{
    render() {
        return (
            <div className={css.back}>
                <div className=" row ">
                    <div className={css.datos + ' col-lg-6 '}>
                        <h3> Fixter</h3>
                        <p>Empresa de tecnologia, ganadora de muchos premios, escuela, siempre innovando.</p>
                        <p>admin@fixter.org</p>
                        <p>7757609276</p>
                    </div>
                    <div className={css.redes + ' col-lg-6 '}>
                        <i className={ css.icon + " fa fa-facebook-square "} aria-hidden="true"></i>
                        <i className={css. icon + " fa fa-twitter-square " }aria-hidden="true"></i>
                        <i className={css.icon + " fa fa-instagram "} aria-hidden="true"></i>

                    </div>

                </div>

            </div>
        );
    }
}

export default Footer;