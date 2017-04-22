import React from "react";
import css from './Fix.css';

class Fix extends React.Component {
    render(){
        return (


            <div>
                    <h1 className={css.tittle }>Fixter</h1>
                    <p className={css.text + ' wait '}>
                        Software a tu medida
                    </p>
            </div>
        );
    }
}

export default Fix;
