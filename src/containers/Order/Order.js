import React, { Component } from 'react';
import OrderControls from './OrderControls/OrderControls';
import OrderSummary from './OrderSummary/OrderSummary';
import Aux from '../../hoc/Aux/Aux';

class Order extends Component {
    state = {  }
    render() { 
        return ( 
            <Aux>
                <OrderSummary />
                <OrderControls />
            </Aux>
         );
    }
}
 
export default Order;