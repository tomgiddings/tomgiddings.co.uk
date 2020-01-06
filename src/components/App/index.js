// @flow
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import Nav from '../Nav';
import Home from '../Home';
import Broadcast from '../Broadcast';
import Development from '../Development';
import Contact from '../Contact';
import Footer from '../Footer';
import { ScrollToTop } from '../Helpers';

class App extends Component<*> {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Route render={({location}) => (
            <ScrollToTop location={location}>
              <Switch location={location}>
                <Route exact path="/" component={Home}/>
                <Route path="/broadcast" component={Broadcast} />
                <Route path="/development" component={Development} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </ScrollToTop>
          )}/>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
