import React from 'react';
import css from './Tecnology.css';

class Tecnology extends React.Component {
    render() {
        return (
            <div className={css.back}>
                <h3 className={css.tittle + ' bot '}>Tecnolgias</h3>
                <p className={css.text + ' bot '}>En Fixter desarrollamos con las tecnologias mas modernas para permitir un desarrollo optimo, escalable y que cubra con todas las necesidades de nuestros clientes</p>
                <div className='container'>
                <div className=' row '>
                    <div className={css.fila + ' col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-5 col-sm-offset-1 col-xs-5 col-xs-offset-1 left'}>
                        <div className={ css.rows + ' row '}>
                            <div className={css.cols + ' col-lg-3 '}>
                                <div className={css.circle}>
                                    <img className={css.image} src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/17951535_1254979217930797_3534742283944892712_n.jpg?oh=aa0cb8152b356075238a507c032c1c1c&oe=5991A6ED" alt=""/>
                                </div>
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
                                <p className={css.lenguaje}>React</p>
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
                                <p className={css.lenguaje}>Unity</p>
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
                                <p className={css.lenguaje}>Firebase</p>
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