import React from 'react';
import classes from './OrderControl.module.css';

const orderControl = (props) => (
    <div className={classes.OrderControl}>
        <button>+</button>
        <button>-</button>
    </div>
)
 
export default orderControl;