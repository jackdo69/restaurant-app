import React, { Component } from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className={classes.Header}>
                <div className={classes.Textbox}>
                    <h1>Welcome to Authentic Vietnamese foodary</h1>
                    <div className={classes.LinkActive}>
                        <NavLink to="/menu">menu</NavLink>
                    </div>
                    <div className={classes.Link}>
                        <NavLink to="/order">order</NavLink>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;