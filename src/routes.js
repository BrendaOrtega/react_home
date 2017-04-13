/**
 * Created by brendaortega on 31/03/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "./components/app/App";
import HomePage from "./components/home/HomePage";
import Servicios from "./components/servicios/Servicios";
import Contacto from "./components/contacto/Contacto";


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="servicios" component={Servicios} />
        <Route path="contacto" component={Contacto} />
        <Route path="*" component={HomePage} />

    </Route>
);