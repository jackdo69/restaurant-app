import * as actionTypes from '../actions';

const initialState = {
    foods: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FOOD:
            const newFood = {
                id: Math.random().toFixed(2)*100,
                name: action.foodData.name,
                price: action.foodData.price
            }
            return {
                ...state,
                foods: state.foods.concat(newFood)
            }
        
        case actionTypes.REMOVE_FOOD:
            return {
                ...state,
                foods: state.foods.filter(food => food.id!==action.index)
            }
    }
    return state
}

export default reducer;