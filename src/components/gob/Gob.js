import React from "react";
import css from './Gob.css';
import gob from '../../assets/not1-01.svg';

class Gob extends React.Component {
    render(){
        return (
            <div>
            	<img className={css.image} src={gob}/>
            </div>

        );
    }
}

export default Gob;