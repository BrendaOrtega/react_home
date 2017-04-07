import React from 'react';
import css from './Promo.css';

class Promo extends React.Component{
    render(){
        return(
            <section className={css.back + ' row '}>
                <div className='col-lg-8'>
                    <h3 className={css.titulo}>Quieres crear tu propio sitio web?</h3>
                    <p className={css.text}>Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial.
                    Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial.
                    Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial. Aprende con nosOtros de forma online o presencial.</p>
                    <button className={css.bot}>Cursos Presenciales</button>
                    <button className={css.bot}>Cursos online</button>
                </div>

            </section>
        );
    }
}

export default Promo;