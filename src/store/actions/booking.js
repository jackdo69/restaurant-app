import * as actionTypes from './actionTypes';
import axios from '../../axios';



export const newBookingAdded = () => {
    return {
        type: actionTypes.NEW_BOOKING_ADDED
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
            dispatch(newBookingAdded())
        })
        .catch(err => {
            console.log(err);
            dispatch(bookingFail())
        })
    }
}

export const fetchBookingStart = () => {
    return {
        type:actionTypes.FETCH_BOOKING_START
    }
}

export const fetchBookingSuccess = (bookings) => {
    return {
        type:actionTypes.FETCH_BOOKING_SUCCESS,
        bookings: bookings
    }
}

export const fetchBookings = () => {
    return dispatch => {
        dispatch(fetchBookingStart())
        let token = localStorage.getItem('token');
        let userId = localStorage.getItem('userId');
        let queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/bookings.json' + queryParams)
        .then(res => {
            const fetchedBookings = []
            for (let key in res.data) {
                fetchedBookings.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchBookingSuccess(fetchedBookings))
        })
        .catch(err => {
            console.log(err);
            
        })
    }
}