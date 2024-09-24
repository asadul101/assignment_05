
const donationNow=document.getElementById('btn-donation_now');
const inputValueShow=document.getElementById('input-value-show');
const donationNow2=document.getElementById('donation_now2');
const inputValueShow2=document.getElementById('input-value-show2')
const donationNow3=document.getElementById('donation_now3');
const inputValueShow3=document.getElementById('input-value-show3')

donationNow.addEventListener('click',function(){
    const inputValue=inputValueGetElementById('input-field-value');
    const inputValueNumber=parseFloat(inputValue);
    if(isNaN(inputValueNumber)){
        return alert('Invalid Number')
    }
    else if(inputValueNumber<0){
        alert('Invalid Number')
    }
    else{
        const bdtDonationValue=getTextValueById('bdt-donation');
        inputValueShow.innerText=inputValueNumber;
        const donationh1=document.getElementById('donation_h1').innerText;
        const inputValueDicres=bdtDonationValue-inputValueNumber;
       document.getElementById('bdt-donation').innerText=inputValueDicres;
    }
    
})
donationNow2.addEventListener('click', function(){
    const inputValue2=inputValueGetElementById('input-field2');
    const inputValueNumber2=parseFloat(inputValue2)
    if(isNaN(inputValueNumber2)){
        return alert('Invalid Number')
    }
    else if(inputValueNumber2<0){
        alert('Invalid Number')
    }
    else{
    const bdtDonationValue=getTextValueById('bdt-donation');
    inputValueShow2.innerText=inputValue2;
    const inputValueDicres2=bdtDonationValue-inputValue2;
    document.getElementById('bdt-donation').innerText=inputValueDicres2;
    }
})
donationNow3.addEventListener('click', function(){
    const inputValue3=inputValueGetElementById('input-field3');
    const inputValueNumber3=parseFloat(inputValue3)
    if(isNaN(inputValueNumber3)){
        return alert('Invalid Number')
    }
    else if(inputValueNumber3<0){
        alert('Invalid Number')
    }
    else{
        const bdtDonationValue=getTextValueById('bdt-donation');
        inputValueShow3.innerText=inputValue3;
        const inputValueDicres3=bdtDonationValue-inputValue3;
        document.getElementById('bdt-donation').innerText=inputValueDicres3;
    }

})

// document.getElementById('donaton-btn').addEventListener('click', function(event){
//     event.target._blank=window.location.href='/index.html';
    
// })