import * as actionTypes from '../actions/actionTypes';

const initialState = {
    bookings: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKING_SUCCESS:
            return {
                ...state,
                bookings: action.bookings
            }       
        default: return state
    }
}

export default reducer;