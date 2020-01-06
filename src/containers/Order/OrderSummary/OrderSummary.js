import React, { Component } from 'react';
import {connect} from 'react-redux';
class OrderSummary extends Component {
    render() { 
        return ( 
            <div>
                {this.props.foods.map(food => (
                    <h4>{food.name}</h4>
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
 
export default connect(mapStateToProps)(OrderSummary);
