import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderSummaryItem from './OrderSummaryItem/OrderSummaryItem';
import * as actions from '../../../store/actions/index';
import classes from './OrderSummary.module.css';
import Aux from '../../../hoc/Aux/Aux';


class OrderSummary extends Component {
    render() {
        let orderItem = null;
        let totalPrice = 0;
        if (this.props.foods.length === 0) {
            orderItem = (
                <p align="center">Please select from the list below:</p>
            )
        } else {
            orderItem = (
                <div className={classes.OrderSummary}>
                    {this.props.foods.map(food => {
                        totalPrice += food.price;
                        return (
                            <OrderSummaryItem
                                key={food.id}
                                name={food.name}
                                price={food.price}
                                remove={() => this.props.onRemoveFood(food.id)} />
                        )
                    })}
                    <div>Total: $ {totalPrice}</div>
                </div>
            )
        }
        return (
            <Aux>
                {orderItem}
            </Aux>

        );
    }
}

const mapStateToProps = state => {
    return {
        foods: state.order.foods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFood: (index) => dispatch(actions.removeFood(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
