import React from 'react';
import css from './Tecnology.css';

class Tecnology extends React.Component {
    render() {
        return (
            <div className={css.back}>
                <h3 className={css.tittle + ' bot '}>Tecnolgías</h3>
                <p className={css.text + ' bot '}>En Fixter usamos tecnologías modernas que permiten un desarrollo óptimo, escalable y que cubre con las necesidades de nuestros clientes</p>
                <div className='container'>
                <div className={css.content + 'row ' }>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 left'}>
                        <div className={ css.rows + ' row '}>
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " glyphicon glyphicon-thumbs-up "} aria-hidden="true"></i>                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6  '}>
                                <p className={css.lenguaje}>Django</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 right'}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Angular</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 left '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>ReactJs</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + '  col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 right'}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Ember</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 left '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Android</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + '  col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 right '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Swift</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 left '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Firebase</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.fila + '  col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 left '}>
                        <div className="row">
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <i className={css.icon + " fa fa-code "} aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className={css.cols + ' col-lg-6 '}>
                                <p className={css.lenguaje}>Unity 5</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default Tecnology;