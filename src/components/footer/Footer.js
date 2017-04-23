import React from 'react';
import css from './Footer.css';

class Footer extends React.Component{
    render() {
        return (
            <div className={css.back}>
                <div className="container">
                <div className=" row ">
                    <div className={css.datos + ' col-lg-6 '}>
                        <h3> Fixter</h3>
                        <p>Centro tecnológico, de innovación y desarrollo de software.</p>
                        <p>admin@fixter.org</p>
                        <p>7757609276</p>
                    </div>
                    <div className={css.redes + ' col-lg-6 '}>
                        <a href="https://www.facebook.com/Fixterorg-1333568760053068/" target="_blank">
                         <i className= "icon fa fa-facebook-square " aria-hidden="true"  target="_blank"></i>
                        </a>
                        <a href="">
                            <i className="icon fa fa-twitter-square " aria-hidden="true"  target="_blank"></i>
                        </a>
                        <a href="">
                            <i className= " icon fa fa-instagram " aria-hidden="true"  target="_blank"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;