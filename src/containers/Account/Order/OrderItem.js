import React, { Component } from 'react';
import classes from './OrderItem.module.css';

class OrderItem extends Component {
    render() {
        
        let foodOutputs = null
        if (this.props.foods) {
            foodOutputs = (this.props.foods.map(item => (
                <span
                    style={{
                        textTransform: 'capitalize',
                        display: 'inline-block',
                        margin: '0 8px',
                        padding: '5px'
                    }}
                    key={item.id}>{item.name} ({item.price})</span>
            )))
        }
        return (
            <div className={classes.OrderItem}>
                {foodOutputs}
            </div>

        );
    }

}

export default OrderItem;