import React from "react";
import css from './Btn.css';

class Btn extends React.Component {
    render(){
        return (

                    <button className={css.btn_cotizar} >{this.props.text}

                    </button>

        );
    }
}

export default Btn;
/**
 * Created by brendaortega on 04/04/17.
 */
