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

export const fetchOrderSuccess = (orders) => {
    return {
        type:actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    }
}

export const clearOrders = () => {
    console.log('clear order');   
    return {
        type: actionTypes.CLEAR_ORDER
    }
}

export const fetchOrders = () => {
    return dispatch => {
        let token = localStorage.getItem('token');
        let userId = localStorage.getItem('userId');
        let queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
        .then(res => {
            const fetchedOrders = []
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrderSuccess(fetchedOrders))
        })
        .catch(err => {
            console.log(err);
            
        })
    }
}