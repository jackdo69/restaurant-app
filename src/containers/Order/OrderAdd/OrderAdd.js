import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderAddItem from './OrderAddItem/OrderAddItem';
import classes from './OrderAdd.module.css';
import * as actions from '../../../store/actions/index'

class OrderAdd extends Component {
    
    render() {
        return (
            <div className={classes.OrderAdd}>
                {this.props.foods.map(food => (
                    <OrderAddItem
                        key={food.id}
                        name={food.name}
                        add={() => this.props.onAddFood(food.name, food.price)} />

                ))}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        foods: state.food.foods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddFood: (name, price) => dispatch(actions.addFood(name, price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderAdd);