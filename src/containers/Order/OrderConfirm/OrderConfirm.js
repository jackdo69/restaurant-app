import React, {Component} from 'react';
import classes from './OrderConfirm.module.css';
import Button from '../../../components/Button/Button';

class OrderConfirm extends Component {

    render() {
        let totalPrice = 0;
        return (
            <div className={classes.OrderConfirm}>
                <h3>Your Order</h3>
                {this.props.foods.map(food => {
                    totalPrice += food.price
                    return (
                        <div 
                            key={food.id}
                            className={classes.row3}>
                            <div>{food.name}</div>
                            <div></div>
                            <div>${food.price}</div>
                        </div>
                    )
                })}
                <hr />
                <div className={classes.row3}>
                    <div><h4>Total</h4></div>
                    <div></div>
                    <div> ${totalPrice.toFixed(2)}</div>
                </div>
                <Button click={this.props.cancel} btnType='Danger'>Cancel</Button>
                <Button click={this.props.proceed} btnType='Success'>Proceed</Button>
                
            </div>
        );
    }
}

export default OrderConfirm;