import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import Main from './components/containers/MainLayout/MainLayout.js'
import HomeContainer from './components/containers/Home/Home.js'
import Page from './components/containers/Page/Page.js'
import LoginContainer from './components/containers/Auth/Login.js'
import RegisterContainer from './components/containers/Auth/Register.js'

import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={HomeContainer} />
                    <Route path="page/:id" component={Page} />
                    <Route path="auth/login" component={LoginContainer} />
                    <Route path="auth/register" component={RegisterContainer} />
                </Route>
            </Router>
        );
    }
}

export default App;
