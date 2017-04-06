import React from 'react';
import css from './Tecnology.css';

class Tecnology extends React.Component {
    render() {
        return (
            <div className={css.back}>
                <h3 className={css.tittle}>Tecnolgias</h3>
                <p className={css.text}>En Fixter desarrollamos con las tecnologias mas modernas para permitir un desarrollo optimo, escalable y que cubra con todas las necesidades de nuestros clientes</p>
                <div className="row">
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-1 '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-1 '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-1 '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-1 '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Python</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Tecnology;