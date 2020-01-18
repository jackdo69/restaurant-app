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

    newOrderAdded = () => {
        this.props.onFetchOrders();
        this.props.onOrderAdded();
    }

    newBookingAdded = () => {
        this.props.onFetchBookings();
        this.props.onBookingAdded();
    }


    render() { 
        if (this.props.orderAdded) {this.newOrderAdded()}
        if (this.props.bookingAdded) {this.newBookingAdded()}
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
        
        if (!this.props.bookingsLoading) {
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
                <br />
                <h4>Your orders:</h4>
                {orders}
                <h4>Your booking:</h4>
                {bookings}
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
        onFetchBookings: () => dispatch(actions.fetchBookings()),
        onOrderAdded: () =>dispatch(actions.newOrderAdded()),
        onBookingAdded: () => dispatch(actions.newBookingAdded())
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        bookings: state.booking.bookings,
        ordersLoading: state.order.loading,
        bookingsLoading: state.booking.loading,
        orderAdded: state.order.orderAdded,
        bookingAdded: state.booking.bookingAdded
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);