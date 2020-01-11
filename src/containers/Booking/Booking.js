import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
import * as actions from '../../store/actions/index';

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
                <button
                    onClick={this.props.logout}>SIGN OUT</button>
            </Aux>

        );
    }
}



const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);