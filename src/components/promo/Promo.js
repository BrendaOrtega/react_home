import React from 'react';
import css from './Promo.css';
import {Link} from "react-router";


class Promo extends React.Component{
    render(){
        return(
            <section className={css.back + ' row '}>
                <div className='col-lg-8'>
                    <h3 className={css.titulo + ' right '}>¿Quieres crear tu propio sitio web?</h3>
                    <p className={css.text + ' right '}>Aprende con nosotros a programar aplicaciones móviles y aplicaciones web completamente funcionales, o tan solo aprende un nuevo lenguaje.
                        Puedes convertirte en un experto en las tecnologías que utilizan empresas como Facebook, Twitter, eBay, Instagram, Mercedez Benz u otras, con cursos que se adaptan a tus necesidades; forma parte de nuestra comunidad y ten acceso a material extra, eventos, descuentos, además de asesoría personalizada. </p>

                    <div className="bot">
                        <a href="https://www.fixter.camp/" target="_blank">
                            <button className={css.btns}>Cursos Presenciales</button>
                        </a>
                        <Link to="construction">
                            <button className={css.btns}>Cursos Online</button>
                        </Link>
                    </div>
                </div>

            </section>
        );
    }
}

export default Promo;