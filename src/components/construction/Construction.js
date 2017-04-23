/**
 * Created by brendaortega on 22/04/17.
 */
import React from 'react';
import css from './Construction.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

class Construction extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div className={css.back}>
                    <Nav />
                </div>
                    <p className={css.text}>Este apartado esta en construccion</p>
                <Footer />
            </div>

        );
    }
}

export default Construction;

