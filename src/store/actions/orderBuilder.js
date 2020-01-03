import * as actionTypes from './actionTypes';

export const addFood = (name) => {
    return {
        type: actionTypes.ADD_FOOD,
        foodName: name
    }
}

export const removeFood = (name) => {
    return {
        type: actionTypes.REMOVE_FOOD,
        foodName: name
    }
}

export const setFoods = (foods) => {
    return {
        type: actionTypes.SET_FOOD,
        foodName: foods
    }
}