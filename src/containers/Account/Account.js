import React, { Component } from 'react';
import classes from './Account.module.css';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import OrderItem from './Order/OrderItem';

class Account extends Component {
    
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let authRedirect = null;

        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to="/auth" />
        }

        let orders = this.props.orders.map(order => (
            <OrderItem 
                key={Math.random().toFixed(2) * 100}
                foods={order.foods} />
        ))

        return (
            <div className={classes.Account}>
                {authRedirect}
                <h2>Welcome back! {localStorage.getItem('userEmail')}</h2>
                <p>Your orders:</p>
                {orders}
                <hr />
                <NavLink
                    to="/logout">SIGN OUT</NavLink>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);