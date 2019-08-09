import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './App.css';

import Home from '../Home'
import Broadcast from '../Broadcast'
import Development from '../Development'

class App extends Component {
  render() {
    document.title = "Tom Giddings";
    return (
      <BrowserRouter>
        <div className="app">
          <nav className="main-nav">
              <NavLink className="main-nav-link" exact to="/">Home</NavLink>
              <NavLink className="main-nav-link" exact to="/broadcast">Broadcast</NavLink>
              <NavLink className="main-nav-link" exact to="/development">Web Development</NavLink>
          </nav>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/broadcast" component={Broadcast} />
                  <Route path="/development" component={Development} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
          <footer>Designed by Tom Giddings and built in React.js. <a href="https://github.com/tomgiddings/tomgiddings">View the code on Github</a>.</footer>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
