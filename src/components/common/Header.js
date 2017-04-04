/**
 * Created by brendaortega on 04/04/17.
 */
/**
 * Created by brendaortega on 31/03/17.
 */
import React from "react";
import {Link} from "react-router";
// import css from "../../app.css";
import css from "./Header.css";


class Header extends React.Component{
    render(){
        return (
            <div className={css.nav}>
                <Link className="{css.logo}" to="/">Fixter</Link>
                <Link className={css.link} to="servicios"> Servicios</Link>
                <Link className={css.link} to="about"> Portafolio</Link>
                <Link className={css.link} to="contacto"> Contacto</Link>
            </div>


        );
    }
}

export default Header;