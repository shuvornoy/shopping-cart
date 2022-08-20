function updatePhoneNumber(isIncrease){
    const phoneNumberFiled = document.getElementById('phone-filed');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseFloat(phoneNumberString);

   let newPhoneNumber;
   if(isIncrease === true){
    newPhoneNumber = previousPhoneNumber + 1;
   }
   else{
    newPhoneNumber = previousPhoneNumber - 1;
   }

   phoneNumberFiled.value = newPhoneNumber;
   return newPhoneNumber;
}

function updatePhoneTotalNumber(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-puls').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalNumber(newPhoneNumber);


    currentSubTotal()
    
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
const newPhoneNumber = updatePhoneNumber(false);

updatePhoneTotalNumber(newPhoneNumber);
currentSubTotal()
})
