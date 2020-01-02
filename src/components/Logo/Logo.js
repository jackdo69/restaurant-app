import React from 'react';
import classes from './Logo.module.css';
import restaurantLogo from '../../assets/img/logo.png'

const logo = () => (
    <div className={classes.Logo}>
        <img src={restaurantLogo} alt="Restaurant Logo" />
    </div>
)
 
export default logo;