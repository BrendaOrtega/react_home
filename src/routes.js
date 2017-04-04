/**
 * Created by brendaortega on 31/03/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "./components/app/App";
import HomePage from "./components/home/HomePage";
import About from "./components/about/About";


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={About} />
        <Route path="*" component={HomePage} />

    </Route>
);