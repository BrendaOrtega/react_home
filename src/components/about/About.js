import React from "react";
import css from './About.css';

class About extends React.Component {
    render(){
        return (
          <div className={css.portafolio}>
            <h3 className={css.tittle}>Portafolio</h3>
              <div className="row col-lg-10 col-lg-offset-1">
                  <div className=' col-lg-4 '>
                      <div className={css.tarjeta}>
                        <img className={css.image} src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                        <p className={css.text}>Reto Zapopan</p>
                      </div>
                      <div className={css.tarjetatres}>
                          <img className={css.image} src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                          <p className={css.text}>Reto Zapopan</p>
                      </div>

                  </div>
                  <div className=' col-lg-4 '>
                      <div className={css.tarjetados}>
                          <img className={css.image} src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                          <p className={css.text}>Reto Zapopan</p>
                      </div>
                      <div className={css.tarjetados}>
                          <img className={css.image} src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                          <p className={css.text}>Reto Zapopan</p>
                      </div>
                  </div>
                  <div className=' col-lg-4 '>
                      <div className={css.tarjeta}>
                          <img className={css.image} src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                          <p className={css.text}>Reto Zapopan</p>
                      </div>
                      <div className={css.tarjetatres}>
                          <img className={css.image} src="https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt=""/>
                          <p className={css.text}>Reto Zapopan</p>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default About;