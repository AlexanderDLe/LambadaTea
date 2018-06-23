import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import About from './components/about/About';
import Footer from './components/layout/Footer';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Landing />
            <About />
            <Gallery />
            <Contact />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
