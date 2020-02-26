import breads from "./helpers/data/breadData.js"
import util from "./util.js"

const radioEvent = (e) => {
    const radioButtons = document.getElementsByClassName('bread-button')
    for (let i =  0; i<radioButtons.length; i++){
        radioButtons[i].addEventListener('click', selectedBread)
    }
}

const selectedBread = (e) => {
    const breadId = e.target.id;
    breads.setSelectedBread(breadId)
}

const breadBuilder = () => {
    const breadings = breads.getBread();
    let domString = ''
    breadings.forEach((bread) => {
    domString += '<div class="btn-group btn-group-toggle" data-toggle="buttons">'
    domString += '<label class="btn btn-secondary active">'
    domString += `<input class="bread-button" type="radio" name="${bread.type}" id="${bread.id}" autocomplete="off" checked> ${bread.type} </label>`
    domString += '</div>'
})
    util.printToDom('bread-container', domString)
    radioEvent()
}

export default { breadBuilder }