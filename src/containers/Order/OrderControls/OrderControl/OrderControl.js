import React from 'react';
import classes from './OrderControl.module.css';

const orderControl = (props) => (
    <div className={classes.OrderControl}>
        <h4>{props.name}</h4>
        <button
            onClick={props.add}>+</button>
    </div>
)
 
export default orderControl;