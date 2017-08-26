/**
 * @file 路由
 */

'use strict';

import React from 'react';
import {Route, Router, IndexRoute, hashHistory, IndexRedirect} from 'react-router';

import Layout from './Layout';
import Home from './Home';
import Juven from './Juven';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRedirect to="juven"/>
            <Route path="home" component={Home}>
            </Route>
            <Route path="juven" component={Juven}>
            </Route>
        </Route>
    </Router>
);

// <Route path="setting" component={Setting}/>
