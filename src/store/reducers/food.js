import * as actionTypes from '../actions/actionTypes'

const initialState = {
    foods: [
        {
            id: 1,
            imgURL: "https://i.imgur.com/HQJU5P3.jpg",
            name: 'Beef Noodle soup',
            description: 'Northern style hot noodle soup with broth and sliced beef, sometimes chicken. Pho is a popular street food in Vietnam and served in restaurants around the world.',
            price: 11.9
        },
        {
            id: 2,
            imgURL: "https://i.imgur.com/mofobXV.jpg",
            name: 'Spring roll',
            description: 'This is the Cantonese spring rolls with a twist of Vietnamese spring rolls. You can make it in advance, and deep-fried directly from the freezer. Spring rolls are suitable for almost every palate, which will be a total crowd pleaser among your friend and family.',
            price: 7.9
        },
        {
            id: 3,
            imgURL: "https://i.imgur.com/196Xhrj.jpg",
            name: 'Fried Rice',
            description: 'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.',
            price: 10.9
        },
        {
            id: 4,
            imgURL: "https://i.imgur.com/qzkqyj0.jpg",
            name: 'Summer Roll',
            description: 'Gỏi cuốn, Vietnamese spring roll, fresh spring roll, cold roll, or rice paper roll, is a Vietnamese dish traditionally consisting of pork, prawn, vegetables, bún, and other ingredients wrapped in Vietnamese bánh tráng.',
            price: 6.9
        },
        {
            id: 5,
            imgURL: "https://i.imgur.com/vDvw8yU.jpg",
            name: 'Beef Salad',
            description: 'Thai salads often do not have raw vegetables or fruit as their main ingredient but use minced meat, seafood or noodles instead. Similar to salads in the West, these dishes often have a souring agent, usually lime juice, and feature the addition of fresh herbs and other greens in their preparation',
            price: 6.5
        },
        {
            id: 6,
            imgURL: "https://i.imgur.com/U1w2pFd.jpg",
            name: 'Grilled Pork Vermicelli',
            description: 'The presentation of bún thịt nướng in the pictorial above follows the Southern Vietnamese style. You usually eat it by mixing everything including the fish sauce. I like to keep the dipping sauce separate, so there isn’t a pool of the sauce at the bottom.',
            price: 11.9     
        }
    ],
    display: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY:
            return {
                ...state,
                display: state.foods.filter(food => food.id === action.id)
            }
        default: return state
    }
}

export default reducer;