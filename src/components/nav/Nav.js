/**
 * Created by brendaortega on 06/04/17.
 */
import React from "react";
import {Link} from "react-router";
import css from "./Nav.css";


class Nav extends React.Component{
    render(){
        return (
            <div className={css.nav}>
                <div className="row">
                    <div className={css.marca + ' col-lg-4 '}>
                        <Link className={css.logo} to="/">Fixter</Link>
                    </div>
                    <div className={css.pestanas + ' col-lg-8 '}>
                        <Link className={css.link} to="servicios"> Servicios</Link>
                        <Link className={css.link} to="about"> Portafolio</Link>
                        <Link className={css.link} to="contacto"> Contacto</Link>
                    </div>
                </div>
            </div>


        );
    }
}

export default Nav;