import * as actionTypes from '../actions';

const initialState = {
    foods: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FOOD:
            const newFood = {
                id: action.foodData.id,
                name: action.foodData.name
            }
            return {
                ...state,
                foods: state.foods.concat(newFood)
            }
        
        case actionTypes.REMOVE_FOOD:
            return {}
    }
    return state
}

export default reducer;