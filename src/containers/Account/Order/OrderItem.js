import React, { Component } from 'react';
import classes from './OrderItem.module.css';

class OrderItem extends Component {
    render() {
        console.log(this.props.foods);
        const foodOutputs = (this.props.foods.map(item => (
            <span
                key={item.id}>{item.name} {item.price}</span>
        )))
        return (
            <div className={classes.OrderItem}>
                {foodOutputs}
            </div>

        );
    }

}

export default OrderItem;