import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';

// components
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';

import './App.scss';

class App extends Component {

    constructor () {
        super();
        this.sideLine = React.createRef();
    }

    componentDidMount () {
        let app = document.getElementById('main');

		window.addEventListener("scroll", function () {
			let appPosition = app.getBoundingClientRect();

			this.sideLine.style.height = 300 + (-appPosition.top) + "px";
		});
    }

    render() {
        return (
            <React.Fragment>
                <div className="c-side-line" id="sideLine" ref={this.sideLine}></div>

                <Header />

                <main className="c-main" id="main">
                    <div className="o-container">

                        <BrowserRouter>
                            <Navigation />

                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/about" component={About} />
                                <Route path="/portfolio" component={Portfolio} />
                                <Route path="/contact" component={Contact} />
                                <Route component={Error} />
                            </Switch>
                        </BrowserRouter>

                    </div>
                </main>

            </React.Fragment>
        );
    }
}

export default App;
