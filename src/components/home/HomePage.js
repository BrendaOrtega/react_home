import React from "react";
import css from './HomePage.css';
import Info from '../info/Info';
import Fix from '../fix/Fix';
import Btn from '../btn/Btn';
import Servicios from '../servicios/Servicios';
import Tecnology from '../tecnology/Tecnology';
import Promo from '../promo/Promo';
import About from '../about/About';
import Noticias from '../noticias/Noticias';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';




class HomePage extends React.Component {
    render(){
        return (
            <div className={css.back}>
                <div className={css.fondo}>
                    <Nav />
                    <Fix />
                    <Btn text="Cotizar" />
                    <Info />
                    <Servicios />
                    <Tecnology />
                    <Promo />
                    <About />
                    <Noticias />
                    <Footer />

                </div>

            </div>

        );
    }
}

export default HomePage;

