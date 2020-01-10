import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/menu">Menu</NavigationItem>
        <NavigationItem
            link="/order">Order</NavigationItem>
        <NavigationItem
            link="/booking">Booking</NavigationItem>
        <NavigationItem
            link="/auth">Account</NavigationItem>
    </ul>
)

export default navigationItems;