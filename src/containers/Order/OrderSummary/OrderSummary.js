import React, { Component } from 'react';
import {connect} from 'react-redux';
import OrderSummaryItem from './OrderSummaryItem/OrderSummaryItem';
import * as actionTypes from '../../../store/actions'


class OrderSummary extends Component {
    render() { 
        return ( 
            <div>
                {this.props.foods.map(food => (
                    <OrderSummaryItem 
                        key={food.id}
                        name={food.name}
                        price={food.price}
                        remove={() => this.props.onRemoveFood(food.id)} />
                ))}
            </div>
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
        onRemoveFood: (index) => dispatch({
            type: actionTypes.REMOVE_FOOD,
            index
        })
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
