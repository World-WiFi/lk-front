import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Containers
import Full from './containers/Full/'

import Login from './modules/base/Users/Auth/Login/'
import Logout from './modules/base/Users/Auth/Logout'
import Register from './modules/base/Users/Auth/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

import allRedusers from './redusers'

import MultiLang from './modules/base/components/multilang/MultiLang/'
import Application from "./modules/base/components/Application";


// все наши action будут проходить через middleware, прежде чем достигнуть reducer
const store = createStore(allRedusers, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    console.log(store.getState());
})

const Authentication = () => sessionStorage.getItem('jwt') ? <Full/> : <Redirect to="/login"/>;

ReactDOM.render((
    <Application env={ENV}>
        <Provider store={store}>
            <MultiLang>
                <HashRouter>
                    <Switch>
                        <Route exact path="/login" name="Login Page" component={Login}/>
                        <Route exact path="/logout" name="Login Page" component={Logout}/>
                        <Route exact path="/register" name="Register Page" component={Register}/>
                        <Route exact path="/page/404" name="Page 404" component={Page404}/>
                        <Route exact path="/page/500" name="Page 500" component={Page500}/>
                        <Route path="/" component={Authentication}/>
                    </Switch>
                </HashRouter>
            </MultiLang>
        </Provider>
    </Application>
), document.getElementById('root'));
