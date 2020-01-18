import React, { Component } from 'react';
import classes from './Account.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import OrderItem from './Order/OrderItem';
import BookingItem from './Booking/BookingItem';
import Spinner from '../../components/Spinner/Spinner';

class Account extends Component {
    
    componentDidMount() {
        this.props.onFetchOrders();
        this.props.onFetchBookings();
    }

    onOrderAdded = () => {
        this.props.onFetchOrders();
        this.props.onOrderAdded();
    }


    render() { 
        if (this.props.orderAdded) {this.onOrderAdded()}
        let authRedirect = null;
        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to="/auth" />
        }

        let orders = <Spinner />;

        if (!this.props.ordersLoading) {
            orders = this.props.orders.map(order => (
                <OrderItem 
                    key={this.props.orders.indexOf(order)}
                    foods={order.foods} />
            ))
        }

        let bookings = <Spinner />;
        
        if (this.props.bookings) {
            bookings = this.props.bookings.map(booking => (
                <BookingItem 
                    key={this.props.bookings.indexOf(booking)}
                    options={booking.booking}/>
            ))
        }
        
        return (
            <div className={classes.Account}>
                {authRedirect}
                <h2>Welcome back! {localStorage.getItem('userEmail')}</h2>
                <p>Your orders:</p>
                {orders}
                <p>Your booking:</p>
                {bookings}
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
        onFetchBookings: () => dispatch(actions.fetchBookings()),
        onOrderAdded: () =>dispatch(actions.newOrderAdded())
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        bookings: state.booking.bookings,
        ordersLoading: state.order.loading,
        orderAdded: state.order.orderAdded
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);