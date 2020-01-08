import React from 'react';
import classes from './OrderControl.module.css';

const orderControl = (props) => (
    <div className={classes.OrderControl}>
        <div className={classes.item1}>
        <h4>{props.name}</h4>
        </div>
        <div className={classes.item2}>
        <button
            onClick={props.add}>ADD</button>
        </div>
    </div>
)
 
export default orderControl;