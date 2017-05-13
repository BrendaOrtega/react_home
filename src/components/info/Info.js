import React from "react";
import css from './Info.css';

class Info extends React.Component {

    
    render(){
        return (

            <div className={css.info} ref='box'>
                <h3 className={css.tittle }>Implementa en tu empresa lo último en sitios web y aplicaciones móviles </h3>
                <hr/>
                <p className={css.text + ' bot '}>
                    En Fixter puedes encontrar la solución a tus problemas tecnológicos.
                    Contamos con expertos en las tecnologías más modernas del desarrollo, generando software de alta calidad, escalable, intuitiva y con buenas prácticas.
                </p>
                <div className={css.image + ' '}></div>
            </div>

        );
    }
}

export default Info;

