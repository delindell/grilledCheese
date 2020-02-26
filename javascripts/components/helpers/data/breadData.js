const breads = [
    {
        type: 'White',
        color: 'White',
        price: 10,
        id: '1'
    },
    {
        type: 'Wheat',
        color: 'Brown',
        price: 10,
        id: '2'
    },
    {
        type: 'Rye',
        color: 'Marbled',
        price: 10,
        id: '3'
    }
]

const breadArray = [];

const setSelectedBread = (breadId) =>{
    selectedBreadId = breadId;
    const breadSelection = breads.find((x) => x.id === breadId)
    breadArray.push(breadSelection)
    console.log(breadArray)
}

const getBread = () => {
    return breads;
}

export default { getBread, setSelectedBread, breadArray }