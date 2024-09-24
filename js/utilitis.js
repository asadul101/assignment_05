function inputValueGetElementById(id){
   
    const inputField=document.getElementById(id).value;
    return inputField;
}

function getTextValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}