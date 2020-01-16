
const initialState = {
    foods: [
        {
            id: 1,
            imgURL: "https://i.imgur.com/HQJU5P3.jpg",
            name: 'Beef Noodle soup',
            description: 'Northern style hot noodle soup with broth and sliced beef',
            price: 11.9
        },
        {
            id: 2,
            imgURL: "https://i.imgur.com/mofobXV.jpg",
            name: 'Spring roll',
            description: 'A delicate entry of fried spring roll',
            price: 7.9
        },
        {
            id: 3,
            imgURL: "https://i.imgur.com/196Xhrj.jpg",
            name: 'Fried Rice',
            description: 'Cooked rice that has been stir-fried in a wok',
            price: 10.9
        },
        {
            id: 4,
            imgURL: "https://i.imgur.com/qzkqyj0.jpg",
            name: 'Summer Roll',
            description: 'Vietnamese dish traditionally consisting of pork, prawn, vegetables',
            price: 6.9
        },
        {
            id: 5,
            imgURL: "https://i.imgur.com/vDvw8yU.jpg",
            name: 'Beef Salad',
            description: 'Fresh and crunchy green papaya, beef and herbs with fish sauce',
            price: 6.5
        },
        {
            id: 6,
            imgURL: "https://i.imgur.com/U1w2pFd.jpg",
            name: 'Grilled Pork Vermicelli',
            description: 'Charcoal grilled pork with vermicelli, homamade sauce and pickles',
            price: 11.9
        }
    ]
}

const reducer = (state = initialState) => {
    return state
}

export default reducer;