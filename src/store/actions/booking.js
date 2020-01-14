import * as actionTypes from './actionTypes';
import axios from '../../axios';



export const bookingSuccess = () => {
    return {
        type: actionTypes.BOOKING_SUCCESS
    }
}

export const bookingFail = () => {
    return {
        type: actionTypes.BOOKING_FAIL
    }
}

export const submitBooking = (booking) => {
    return dispatch =>{
        let token = localStorage.getItem('token')
        
        axios.post('/bookings.json?auth=' + token, booking)
        .then(res => {
            console.log(res);
            dispatch(bookingSuccess())
        })
        .catch(err => {
            console.log(err);
            dispatch(bookingFail())
        })
    }
}

// export const fetchOrderSuccess = (orders) => {
//     return {
//         type:actionTypes.FETCH_BOOKING_SUCCESS,
//         orders: orders
//     }
// }

// export const fetchOrders = () => {
//     return dispatch => {
//         let token = localStorage.getItem('token');
//         let userId = localStorage.getItem('userId');
//         let queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
//         axios.get('/orders.json' + queryParams)
//         .then(res => {
//             const fetchedOrders = []
//             for (let key in res.data) {
//                 fetchedOrders.push({
//                     ...res.data[key],
//                     id: key
//                 });
//             }
//             dispatch(fetchOrderSuccess(fetchedOrders))
//         })
//         .catch(err => {
//             console.log(err);
            
//         })
//     }
// }