import React from 'react';
import classes from './OrderSummaryItem.module.css'

const OrderSummaryItem = (props) => (
    <div className={classes.OrderSummaryItem}>
        <div className={classes.item1}>
            $ {props.price}
        </div>
        <div className={classes.item2}>
            <h4>{props.name}</h4>
        </div>
        <div className={classes.item3}>
            <button
                onClick={props.remove}>REMOVE</button>
        </div>


    </div>
)

export default OrderSummaryItem;