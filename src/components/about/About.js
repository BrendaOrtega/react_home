import React from "react";
import css from './About.css';
import img from '../../assets/1.png';
import imgs from '../../assets/2.png';
import imagen from '../../assets/3.png';
import cuatro from '../../assets/4.png';
import cinco from '../../assets/5.png';
import seis from '../../assets/6.png';



class About extends React.Component {
    render(){
        return (
          <section className={css.portafolio}>
            <h3 className={css.tittle + ' bot '}>Portafolio</h3>
              <div className={css.contenedor + ' row '}>
                  <div className=' col-lg-4 col-md-4 col-sm-4 col-xs-12 '>
                      <div className="img-containers-inv left">
                          <div className="img-click">
                        <img className="img-responsive" src={img} alt=""/>
                        <p className="img-info">OTEH: Red Sinergica virtual</p></div>
                      </div>
                      <div className="img-containers-inv left ">
                          <div className="img-click">
                              <img className="img-responsive" src={imgs} alt=""/>
                                <p className="img-info">E-commerce: Eric de la Parra</p>
                          </div>
                      </div>
                  </div>
                  <div className=' col-lg-4 col-md-4 col-sm-4 col-xs-12 '>
                      <div className="img-containers bot ">
                          <div className="img-click">
                              <img className="img-responsive" src={imagen} alt=""/>
                              <p className="img-info">Crowdfunding Zapopan</p></div>
                      </div>
                      <div className="img-containers bot ">
                          <div className="img-click">
                              <img className="img-responsive" src={cuatro} alt=""/>
                              <p className="img-info">Consulta estatal para el PED</p>
                          </div>
                      </div>
                  </div>
                  <div className=' col-lg-4 col-md-4 col-sm-4 col-xs-12 '>
                      <div className="img-container right">
                          <div className="img-click">
                              <img className="img-responsive" src={seis} alt=""/>
                              <p className="img-info">Hotel Boutique Quinta Esencia</p></div>
                      </div>
                      <div className="img-container right ">
                          <div className="img-click">
                              <img className="img-responsive" src={cinco} alt=""/>
                              <p className="img-info">Y más...</p>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
        );
    }
}

export default About;