import React from "react";
import css from './Hgo.css';
import hgo from '../../assets/hgo-01.svg';

class Hgo extends React.Component {
    render(){
        return (
            <div>
            	<img className={css.image} src={hgo}/>
            </div>

        );
    }
}

export default Hgo;