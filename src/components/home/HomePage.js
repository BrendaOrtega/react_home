import React from "react";
import css from './HomePage.css';
import Info from '../info/Info';
import Fix from '../fix/Fix';
import Btn from '../btn/Btn';
import Servicios from '../servicios/Servicios';
import Tecnology from '../tecnology/Tecnology';
import Promo from '../promo/Promo';
import About from '../about/About';


class HomePage extends React.Component {
    render(){
        return (
            <div className={css.back}>
                <div className={css.fondo}>

                    <Fix />
                    <Btn text="Cotizar" />
                    <Info />

                    <Servicios />
                    <Tecnology />
                    <Promo />
                    <About />
                </div>
            </div>

        );
    }
}

export default HomePage;

