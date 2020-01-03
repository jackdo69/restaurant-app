import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const foods = {
    beefNoodle: {
        id: 1,
        picUrl: "~assets/img/beef-noodle.jpg",
        name: "Beef Noodle",
        description: "A vietnamese hot noodle soup",
        price: 11.9
    },
    springRoll: {
        id: 2,
        picUrl: "~assets/img/spring-roll.jpg",
        name: "Spring Roll",
        description: "A crunchy fried pork mince roll",
        price: 7.9
    }
}

const initialState = {
    foods: null,
    totalPrice: 0
}

const addFood = (state, action) => {
    const updatedFood = {
        [action.foodName] : state.foods[action.foodName] + 1
    }
    const updatedFoods = updateObject(state.foods, updatedFood);
    const updatedState = {
        foods: updatedFoods,
        totalPrice: state.totalPrice + foods(action.foodName.price)
    }
    return updateObject(state, updatedState)
}

const removeFood = (state, action) => {
    const updatedFood = {
        [action.foodName] : state.foods[action.foodName] - 1
    }
    const updatedFoods = updateObject(state.foods, updatedFood);
    const updatedState = {
        foods: updatedFoods,
        totalPrice: state.totalPrice - foods(action.foodName.price)
    }
    return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FOOD: return addFood(state, action);
        case actionTypes.REMOVE_FOOD: return removeFood(state, action);
        default: return state;
    }
}

export default reducer;