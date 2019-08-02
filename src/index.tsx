import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './config/global.scss';
import * as serviceWorker from './serviceWorker';

import PageMain from './currencyConvert/pages/pMain'
import PageConvert from './currencyConvert/pages/pConvert'

const mainRender = (
  <Router>
    <header className="app-header mb-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand mr-auto mr-lg-0" to="/">Currency Manager</Link>

            <div className="navbar-collapse offcanvas-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/convert">Convert</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main className="container app-content">
        <Route exact path="/" component={PageMain} />
        <Route path="/convert" component={PageConvert} />
    </main>
</Router>
);

ReactDOM.render(mainRender, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
