import React from "react";
import css from './Btn.css';
import {Link} from "react-router";


class Btn extends React.Component {
    render(){
        return (
        <Link  to="contacto">
            <button className={css.btn_cotizar} >{this.props.text}</button>
        </Link>

        );
    }
}

export default Btn;

