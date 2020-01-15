import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/menu">Menu</NavigationItem>
        <NavigationItem
            link="/order">Order</NavigationItem>
        <NavigationItem
            link="/booking">Booking</NavigationItem>
        <NavigationItem
            link="/account">Account</NavigationItem>
            {props.auth ? <NavigationItem
            link="/logout">Sign out</NavigationItem> : null}
    </ul>
)

export default navigationItems;