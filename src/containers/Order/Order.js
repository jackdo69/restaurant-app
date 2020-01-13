import React, { Component } from 'react';
import OrderControls from './OrderControls/OrderControls';
import OrderSummary from './OrderSummary/OrderSummary';
import Aux from '../../hoc/Aux/Aux';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/index';

class Order extends Component {

    orderHandler = (event) => {
        event.preventDefault();
        const order = {
            foods: this.props.foods,
            userId: this.props.userId
        }
        this.props.onSubmitOrder(order)
    }

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
                <button
                    onClick={this.orderHandler}>Place order</button>
                <NavLink
                    to="/logout">SIGN OUT</NavLink>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath,
        foods: state.order.foods,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitOrder: (orderData) => dispatch(actions.submitOrder(orderData))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Order);