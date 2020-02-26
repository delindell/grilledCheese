import cheeses from "./helpers/data/cheeseData.js"
import util from "./util.js"

const radioEvent = (e) => {
    const radioButtons = document.getElementsByClassName('cheese-button')
    for (let i =  0; i<radioButtons.length; i++){
        radioButtons[i].addEventListener('click', selectedCheese)
    }
}

const selectedCheese = (e) => {
    const cheeseId = e.target.id;
    cheeses.setSelectedCheese(cheeseId)
}

const cheeseBuilder = () => {
    const allSelectedCheeses = []
    const cheesings = cheeses.getCheese();
    let domString = ''
    cheesings.forEach((cheese) => {
    domString += '<div class="btn-group btn-group-toggle" data-toggle="buttons">'
    domString += '<label class="btn btn-secondary active">'
    domString += `<input class="cheese-button" type="radio" name="${cheese.type}" id="${cheese.id}" autocomplete="off" checked> ${cheese.type} </label>`
    domString += '</div>'
})
    util.printToDom('cheese-container', domString)
    radioEvent()
}

export default { cheeseBuilder }