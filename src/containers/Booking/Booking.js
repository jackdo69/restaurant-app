import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';

class Booking extends Component {

    render() {
        let authRedirect = null;

        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }
        return (
            <Aux>
                {authRedirect}
                <h2>Booking</h2>
                
                <NavLink
                    to="/logout">SIGN OUT</NavLink>
            </Aux>

        );
    }
}



const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath
    }
}


export default connect(mapStateToProps, null)(Booking);