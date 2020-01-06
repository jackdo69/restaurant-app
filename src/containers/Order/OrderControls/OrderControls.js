import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderControl from './OrderControl/OrderControl';
import * as actionTypes from '../../../store/actions'

class OrderControls extends Component {
    
    render() {
        return (
            <div>
                {this.props.foods.map(food => (
                    <OrderControl
                        key={food.id}
                        name={food.name}
                        add={() => this.props.onAddFood(food.id, food.name)} />

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
        onAddFood: (id, name) => dispatch({
            type:actionTypes.ADD_FOOD,
            foodData: {
                name: name,
                id: id
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderControls);