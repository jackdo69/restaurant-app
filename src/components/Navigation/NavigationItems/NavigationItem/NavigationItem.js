import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';


const navigationItem  = (props) => (
    <li className={classes.NavigationItem}>
        <a href="#">{props.children}</a>
    </li>
)
 
export default navigationItem ;