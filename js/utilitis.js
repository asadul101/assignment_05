function inputValueGetElementById(id){
   
    const inputField=document.getElementById(id).value;
    return inputField;
}

function getTextValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}
function getHiddinAllFuntion(id){
    document.getElementById('section-1').classList.add('hidden');
    document.getElementById('section-02').classList.add('hidden');
    document.getElementById('section-1').classList.add('bg-red-300');
    document.getElementById('section-02').classList.add('bg-red-300');

    //  show hidden all clear
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('bg-red-300');
}