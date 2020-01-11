import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderControl from './OrderControl/OrderControl';
import classes from './OrderControls.module.css';
import * as actions from '../../../store/actions/index'

class OrderControls extends Component {
    
    render() {
        return (
            <div className={classes.OrderControls}>
                {this.props.foods.map(food => (
                    <OrderControl
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderControls);