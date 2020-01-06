
const initialState = {
    foods: [
        {
            id: 1,
            name: 'Beef Noodle soup',
            description: 'Northern style hot noodle soup with broth and sliced beef',
            price: 11.9
        },
        {
            id: 2,
            name: 'Spring roll',
            description: 'A delicate entry of fried spring roll',
            price: 7.9
        }
    ]
}

const reducer = (state = initialState) => {
    return state
}

export default reducer;