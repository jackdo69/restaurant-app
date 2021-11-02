import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

class Toolbar extends Component {
  render() {
    let isAuth = localStorage.getItem('token');
    return (
      <header className={classes.Toolbar}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems auth={isAuth} />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
