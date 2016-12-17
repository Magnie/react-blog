import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import Main from './components/containers/MainLayout/MainLayout.js'
import Home from './components/containers/Home/Home.js'
import Page from './components/containers/Page/Page.js'

import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home} />
                    <Route path="page/:id" component={Page} />
                </Route>
            </Router>
        );
    }
}

export default App;
