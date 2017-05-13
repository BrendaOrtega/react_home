import React from 'react';
import {render} from 'react-dom';
import HomePage from "./components/home/HomePage";
import {Router, browserHistory} from 'react-router';
import routes from "./routes";
import '../node_modules/bootstrap/dist/css/bootstrap.css?global';
import '../node_modules/font-awesome/css/font-awesome.css?global';
import './app.css';


render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
