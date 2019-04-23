import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';

// components
import Navigation from './components/Navigation';

class App extends Component {
    render() {
        return (
            <div className="App">

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
        );
    }
}

export default App;
