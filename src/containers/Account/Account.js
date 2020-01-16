import React, { Component } from 'react';
import classes from './Account.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import OrderItem from './Order/OrderItem';
import BookingItem from './Booking/BookingItem';

class Account extends Component {
    
    componentDidMount() {
        this.props.onFetchOrders();
        this.props.onFetchBookings();
    }

    render() {
        let authRedirect = null;

        if (!localStorage.getItem('token')) {
            authRedirect = <Redirect to="/auth" />
        }
        let orders = null
        if (this.props.orders) {
            orders = this.props.orders.map(order => (
                <OrderItem 
                    key={this.props.orders.indexOf(order)}
                    foods={order.foods} />
            ))
        }

        let bookings = null

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
        onFetchBookings: () => dispatch(actions.fetchBookings())
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        bookings: state.booking.bookings
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);