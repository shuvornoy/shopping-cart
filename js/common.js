function getTextElementValueById(elementTd){
    const phoneTotalElement = document.getElementById(elementTd);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseFloat(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementTd, value){
    const subTotalElement = document.getElementById(elementTd);
    subTotalElement.innerText = value;
}

function currentSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);


    //calculet tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-total', taxAmount);

    //final calculet
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
    
}