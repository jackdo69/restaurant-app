import React from 'react';
import classes from './OrderRemoveItem.module.css'

const OrderRemoveItem = (props) => (
    <div className={classes.OrderRemoveItem}>
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

export default OrderRemoveItem;