const cheeses = [
    {
        type: 'Cheddar',
        color: 'White',
        price: 10,
        id: '1'
    },
    {
        type: 'Gruyere',
        color: 'White',
        price: 10,
        id: '2'
    },
    {
        type: 'American',
        color: 'Yellow',
        price: 10,
        id: '3'
    }
]

let selectedCheeseId = ''

const setSelectedCheese = (cheeseId) =>{
    selectedCheeseId = cheeseId;
    console.log('selectedCheeseId', selectedCheeseId)
}

const getCheese = () => {
    return cheeses;
}

export default { getCheese, setSelectedCheese }