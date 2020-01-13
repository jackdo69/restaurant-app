import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const addFood = (name, price) => {
    return {
        type: actionTypes.ADD_FOOD,
        name: name,
        price: price
    }
};

export const removeFood = (index) => {
    return {
        type: actionTypes.REMOVE_FOOD,
        index: index
    }
};

export const orderSuccess = () => {
    return {
        type: actionTypes.ORDER_SUCCESS
    }
}

export const orderFail = () => {
    return {
        type: actionTypes.ORDER_FAIL
    }
}

export const submitOrder = (order) => {
    return dispatch =>{
        let token = localStorage.getItem('token')
        axios.post('/orders.json?auth=' + token, order)
        .then(res => {
            console.log(res);
            dispatch(orderSuccess())
        })
        .catch(err => {
            console.log(err);
            dispatch(orderFail())
        })
    }
}

// export const fetchOrders = (userId) => {
//     return dispatch => {

//     }
// }