'use strict';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import routes from './route';
import './styles/index.less';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className='root' >
                {routes}
            </div>
        );
    }
}

render(
    <App />, document.getElementById('root')
);


