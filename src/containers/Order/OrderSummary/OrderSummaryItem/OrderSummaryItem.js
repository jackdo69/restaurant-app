import React from 'react';
import classes from './OrderSummaryItem.module.css'

const OrderSummaryItem = (props) => (
    <div className={classes.OrderControl}>
        <h4>{props.name}</h4> $ {props.price}
        <button
            onClick={props.remove}>-</button>
    </div>
)
 
export default OrderSummaryItem;