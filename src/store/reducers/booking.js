import * as actionTypes from '../actions/actionTypes';

const initialState = {
    bookings: [],
    bookingAdded: false,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKING_START:
            return {
                ...state,
                loading: true
            }

        case actionTypes.FETCH_BOOKING_SUCCESS:
            return {
                ...state,
                bookings: action.bookings,
                loading: false
            } 
            
        case actionTypes.NEW_BOOKING_ADDED:
            return {
                ...state,
                bookingAdded: !state.bookingAdded
            }
        default: return state
    }
}

export default reducer;