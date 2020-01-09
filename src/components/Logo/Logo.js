import React from 'react';
import classes from './Logo.module.css';
import restaurantLogo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom'

const logo = () => (
    <div className={classes.Logo}>
        <NavLink to="/"><img src={restaurantLogo} alt="Restaurant Logo" /></NavLink>
    </div>
)
 
export default logo;