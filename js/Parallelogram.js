function calculateparallelogramArea(){
    const base = getInputvalue('parallelogram-base');
    const height = getInputvalue('parallelogram-height');

    const area = base*height;
    // console.log(area);

    setInnerText("Parallelogram-area", area);
}


function getInputvalue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

function setInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}