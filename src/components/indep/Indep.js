import React from "react";
import css from './Indep.css';
import indep from '../../assets/indep-01.svg';

class Indep extends React.Component {
    render(){
        return (
            <div>
            	<img className={css.image} src={indep}/>
            </div>

        );
    }
}

export default Indep;