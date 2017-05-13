import React from "react";
import {Link} from "react-router";
import css from './Noticias.css';
import Gob from '../gob/Gob';
import Milenio from '../milenio/Milenio';
import Hgo from '../hgo/Hgo';
import Indep from '../indep/Indep';

class Noticias extends React.Component {
    render(){
        return (
            <div className={css.back}>
                <h3 className={css.tittle + ' bot '}>Lo que dicen de nostros...</h3>
                <div className="container">
                <div className="row">
                    <div className={' col-lg-3 col-md-3 col-sm-3 col-xs-6 bot '}>
                        <Link href="http://www.milenio.com/firmas/columna_ciencia_y_tecnologia_columna_ciencia_y_tecnologia/nerd_18_759104125.html" target="_blank">
                        <Milenio />
                        </Link>
                    </div>
                    <div className={' col-lg-3 col-md-3 col-sm-3 col-xs-6 bot '}>
                        <Link href="http://www.gob.mx/se/prensa/otorgan-premio-a-los-ganadores-del-reto-crowfunding-reto-zapopan"  target="_blank">
                        <Gob />
                        </Link>
                    </div>
                    <div className={' col-lg-3 col-md-3 col-sm-3 col-xs-6 bot '}>
                    <Link href="http://www.elindependientedehidalgo.com.mx/archivo/2016/04/324454" target="_blank">
                      <Indep />
                    </Link>
                </div>
                    <div className={' col-lg-3 col-md-3 col-sm-3 col-xs-6 bot '}>
                        <Link href="http://comunicacion.hidalgo.gob.mx/?p=26428" target="_blank">
                        <Hgo />
                        </Link>
                    </div>

                </div>
                </div>
            </div>

        );
    }
}

export default Noticias;