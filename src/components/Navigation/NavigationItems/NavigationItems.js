import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Take Away</NavigationItem>
        <NavigationItem>Dine In</NavigationItem>
        <NavigationItem>Auth</NavigationItem>
    </ul>
)
 
export default navigationItems;