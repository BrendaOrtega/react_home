import React from "react";
import css from './About.css';

class About extends React.Component {
    render(){
        return (
          <section className={css.portafolio}>
            <h3 className={css.tittle + ' bot '}>Portafolio</h3>
              <div className={css.contenedor + ' row '}>
                  <div className=' col-lg-4 col-md-4 col-sm-4 col-xs-12 '>
                      <div className="img-containers-inv left">
                          <div className="img-click">
                        <img className="img-responsive" src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                        <p className="img-info">OTEH: Red Sinergica virtual</p></div>
                      </div>
                      <div className="img-containers-inv left ">
                          <div className="img-click">
                              <img className="img-responsive" src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                                <p className="img-info">E-commerce: Eric de la Parra</p>
                          </div>
                      </div>
                  </div>
                  <div className=' col-lg-4 col-md-4 col-sm-4 col-xs-12 '>
                      <div className="img-containers bot ">
                          <div className="img-click">
                              <img className="img-responsive" src="https://images.pexels.com/photos/271560/pexels-photo-271560.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                              <p className="img-info">Crowdfunding Zapopan</p></div>
                      </div>
                      <div className="img-containers bot ">
                          <div className="img-click">
                              <img className="img-responsive" src="https://images.pexels.com/photos/57825/pexels-photo-57825.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                              <p className="img-info">Consulta estatal para el PED</p>
                          </div>
                      </div>
                  </div>
                  <div className=' col-lg-4 col-md-4 col-sm-4 col-xs-12 '>
                      <div className="img-container right">
                          <div className="img-click">
                              <img className="img-responsive" src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                              <p className="img-info">Hotel Boutique Quinta Esencia</p></div>
                      </div>
                      <div className="img-container right ">
                          <div className="img-click">
                              <img className="img-responsive" src="https://images.pexels.com/photos/27704/pexels-photo-27704.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                              <p className="img-info">Vijusa México</p>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
        );
    }
}

export default About;