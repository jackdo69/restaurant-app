
const initialState = {
    foods: [
        {
            id: 1,
            imgURL: "https://i.imgur.com/yO4EnHm.jpg",
            name: 'Beef Noodle soup',
            description: 'Northern style hot noodle soup with broth and sliced beef',
            price: 11.9
        },
        {
            id: 2,
            imgURL: "https://i.imgur.com/tlnwP6x.jpg",
            name: 'Spring roll',
            description: 'A delicate entry of fried spring roll',
            price: 7.9
        },
        {
            id: 3,
            imgURL: "https://i.imgur.com/m2iSSm7.jpg",
            name: 'Fried Rice',
            description: 'Cooked rice that has been stir-fried in a wok',
            price: 10.9
        },
        {
            id: 4,
            imgURL: "https://i.imgur.com/67ImG8U.jpg",
            name: 'Summer Roll',
            description: 'Vietnamese dish traditionally consisting of pork, prawn, vegetables',
            price: 6.9
        }
    ]
}

const reducer = (state = initialState) => {
    return state
}

export default reducer;