import React, { Component } from 'react';
import OrderControls from './OrderControls/OrderControls';
import OrderSummary from './OrderSummary/OrderSummary';
import Aux from '../../hoc/Aux/Aux';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

class Order extends Component {

    render() {
        let authRedirect = null;
        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }
        return (
            <Aux>
                {authRedirect}
                <OrderSummary />
                <OrderControls />
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



export default connect(mapStateToProps, null)(Order);