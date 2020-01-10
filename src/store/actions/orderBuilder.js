import * as actionTypes from './actionTypes';

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