// @flow
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import anime from 'animejs';
import { ScrollCheck } from '../Helpers';


const Nav = ({ }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const hideLogo = ScrollCheck();

  return (
    <span>
      <header className="top-bar">
        <span className={ 'logo ' + ( hideLogo ? 'show' : 'hide') }><a href="/">Tom Giddings</a></span>
        <button onClick={toggleMenu} className="toggle-menu"><span className={ 'toggle-menu-inner ' + ( showMenu ? 'show' : 'hide') }></span></button>
      </header>
      <nav className={ 'main-nav ' + ( showMenu ? 'show' : 'hide') }>
        <NavLink className="main-nav-link" exact to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink className="main-nav-link" exact to="/development" onClick={toggleMenu}>Web Developer</NavLink>
        <NavLink className="main-nav-link" exact to="/broadcast" onClick={toggleMenu}>Broadcast Engineer</NavLink>
        <NavLink className="main-nav-link" exact to="/contact" onClick={toggleMenu}>Contact Me</NavLink>
      </nav>
    </span>
  )
}
export default Nav
