import React from 'react';
import classes from './OrderAddItem.module.css';

const orderAddItem = (props) => (
    <div className={classes.OrderAddItem}>
        <div className={classes.item1}>
        <h4>{props.name}</h4>
        </div>
        <div className={classes.item2}>
        <button
            onClick={props.add}>ADD</button>
        </div>
    </div>
)
 
export default orderAddItem;