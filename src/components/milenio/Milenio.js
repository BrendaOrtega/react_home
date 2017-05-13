import React from "react";
import css from './Milenio.css';
import milenio from '../../assets/milenio-01.svg';

class Milenio extends React.Component {
    render(){
        return (
            <div>
            	<img className={css.image} src={milenio}/>
            </div>

        );
    }
}

export default Milenio;