/**
 * Created by brendaortega on 31/03/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "./components/app/App";
import HomePage from "./components/home/HomePage";
import Servicios from "./components/servicios/Servicios";
import Cont from './components/contacto/ContactoCT';
import Construction from "./components/construction/Construction";


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="servicios" component={Servicios} />
        <Route path="contacto" component={Cont} />
        <Route path="construction" component={Construction} />
        <Route path="*" component={HomePage} />


    </Route>
);