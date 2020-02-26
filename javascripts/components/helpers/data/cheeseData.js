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

const arrOfSelectedCheeses = [];

const setSelectedCheese = (cheeseId) =>{
    selectedCheeseId = cheeses.find((x) => x.id === cheeseId)
    arrOfSelectedCheeses.push(selectedCheeseId)
    console.log(arrOfSelectedCheeses)
}

const getCheese = () => {
    return cheeses;
}

export default { getCheese, setSelectedCheese, arrOfSelectedCheeses }