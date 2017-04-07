import React from "react";
import css from './Noticias.css';

class Noticias extends React.Component {
    render(){
        return (
            <div className={css.back}>
                <h3 className={css.tittle}>Lo que dicen de nostros...</h3>
                <div className="row">
                    <div className={' col-lg-3 '}>
                        <img className={css.image} src="https://jorgecastaneda.org/wp-content/uploads/2016/08/milenio_2016.png" alt=""/>
                    </div>
                    <div className={' col-lg-3 '}>
                        <img className={css.image} src="https://jorgecastaneda.org/wp-content/uploads/2016/08/milenio_2016.png" alt=""/>
                    </div>
                    <div className={' col-lg-3 '}>
                        <img className={css.image} src="https://jorgecastaneda.org/wp-content/uploads/2016/08/milenio_2016.png" alt=""/>
                    </div>
                    <div className={' col-lg-3 '}>
                        <img className={css.image} src="https://jorgecastaneda.org/wp-content/uploads/2016/08/milenio_2016.png" alt=""/>
                    </div>

                </div>
            </div>

        );
    }
}

export default Noticias;