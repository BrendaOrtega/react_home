import React from "react";
import css from './HomePage.css';
import Info from '../info/Info';
import Fix from '../fix/Fix';
import Btn from '../btn/Btn';
import Servicios from '../servicios/Servicios';

class HomePage extends React.Component {
    render(){
        return (
            <div className={css.desk}>
                <div className={css.fondo}>
                    <Fix />
                    <Btn text="Cotizar" />
                    <Info />
                </div>
                <Servicios />
            </div>

        );
    }
}

export default HomePage;

