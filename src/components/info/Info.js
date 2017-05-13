import React from "react";
import css from './Info.css';
import sr from './scrollReveal.js';

 export class Info extends React.Component {

    componentDidMount () {
        const config = {
            origin: 'bottom',
      duration: 1000,
      delay: 150,
      scale: 1,
      easing: 'ease',
        }
        sr.reveal(this.refs.brendi, config)

    }
    
    render(){
        return (
            <div ref="brendi" className='info' >
            <div className={css.inf}>
                <h3 className={css.tittle } >Implementa en tu empresa lo último en sitios web y aplicaciones móviles </h3>
                <hr/>
                <p className={css.text + ' bot '}>
                    En Fixter puedes encontrar la solución a tus problemas tecnológicos.
                    Contamos con expertos en las tecnologías más modernas del desarrollo, generando software de alta calidad, escalable, intuitiva y con buenas prácticas.
                </p>
                <div className={css.image}></div>
            </div>
            </div>

        );
    }
}

export default Info;

