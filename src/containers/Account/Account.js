import React, { Component } from 'react';
import classes from './Account.module.css';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

class Account extends Component {
    state = {}
    render() {
        let authRedirect = null;

        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to="/auth" />
        }
        return (
            <div className={classes.Account}>
                {authRedirect}
                <h2>Welcome back! {localStorage.getItem('userEmail')}</h2>
                <NavLink
                    to="/logout">SIGN OUT</NavLink>
            </div>

        );
    }
}


export default connect(null, null)(Account);