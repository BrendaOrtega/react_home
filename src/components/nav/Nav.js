
import React from "react";
import {Link} from "react-router";
import css from "./Nav.css";
import {$,jQuery} from 'jquery';

class Nav extends React.Component{
    render(){
        return (
            <div className={css.nav}>

                <div className={css.rows + " row "}>
                    <div className={css.marca + ' col-lg-3 col-lg-offset-1 col-md-4 col-sm-6 col-xs-6 '}>
                        <Link className={css.logo} to="/">Fixter</Link>
                    </div>
                    <div className={css.pestanas + ' col-lg-8 col-md-8 '}>
                        <Link className={css.link + ' col-lg-2 '} to="servicios"> Servicios</Link>
                        <Link className={css.link + ' col-lg-2 '} to="blog"> Blog</Link>
                        <Link className={css.link + ' col-lg-2 '} to="contacto"> Contacto</Link>
                        <div className={css.menu + ' col-lg-2 col-md-2 col-sm-6 col-xs-6 '}>
                        <span>Menu<i className="fa fa-bars" aria-hidden="true"></i></span>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Nav;