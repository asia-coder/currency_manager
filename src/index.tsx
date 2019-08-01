import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './config/global.scss';

// import CurrencyManager from './currencyConvert/CurrencyManager';
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
            {/* <div class="nav-scroller bg-white shadow-sm">
                <nav class="nav nav-underline">
                    <a class="nav-link active" href="#">Dashboard</a>
                    <a class="nav-link" href="#">
                    Friends
                    <span class="badge badge-pill bg-light align-text-bottom">27</span>
                    </a>
                    <a class="nav-link" href="#">Explore</a>
                    <a class="nav-link" href="#">Suggestions</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                </nav>
            </div> */}
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
