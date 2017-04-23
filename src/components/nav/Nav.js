
import React from "react";
import {Link} from "react-router";
import css from "./Nav.css";


class Nav extends React.Component{
    constructor(){
        super();

        this.state = {
            menu:true
        };

        this.menu = this.menu.bind(this);

    }

    menu(e){
        e.preventDefault();
        this.setState({
            menu: !this.state.menu
        });
    }

    render(){
        return (
            <div className={css.nav + ' container '}>
                <div className= " row ">
                    <div className={ ' col-lg-2 col-md-3 col-sm-6 col-xs-6 ' }>
                        <Link className={css.logo} to="/">Fixter</Link>
                    </div>
                    <div onClick={this.menu} className={css.menu + ' col-lg-9 col-md-9 col-sm-6 col-xs-6 '}> 
                        <span  >Menu<i className="fa fa-bars" aria-hidden="true"></i></span> 
                    </div>
                    <div className={css.pestanas}>
                        <div className={this.state.menu ? css.remove:''}> 

                            <Link className={css.link + ' col-lg-2 col-lg-offset-4 col-md-2 col-md-offset-3 col-sm-12 col-xs-12'}  to="construction"> Gaming</Link> 
                            <a href="http://blog.fixter.org/" className={css.link + ' col-lg-2 col-md-2 col-sm-12 col-xs-12'} target="_blank"> Blog</a> 
                            <Link className={css.link + ' col-lg-2 col-md-2 col-sm-12 col-xs-12'} to="contacto"> Contacto</Link>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;