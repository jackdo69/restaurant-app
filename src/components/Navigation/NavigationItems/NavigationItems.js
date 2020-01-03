import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Menu</NavigationItem>
        <NavigationItem>Order</NavigationItem>
        <NavigationItem>Booking</NavigationItem>
        <NavigationItem>Auth</NavigationItem>
    </ul>
)
 
export default navigationItems;