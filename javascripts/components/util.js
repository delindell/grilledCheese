const printToDom = (divId, textToPrint) => {
    console.log('hellow')
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

export default { printToDom };