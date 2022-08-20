function updateCaseNumber(isIncrease){
    const caseNumberFiled = document.getElementById('case-filed');
   const caseNumberString = caseNumberFiled.value;
   const previousCaseNumber = parseFloat(caseNumberString);

   let newCaseNumber;
   if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;
   }
   else{
    newCaseNumber = previousCaseNumber - 1;
   }

   caseNumberFiled.value = newCaseNumber;
   return newCaseNumber;
}

function updateCaseTotalNumber(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalNumber(newCaseNumber);
    currentSubTotal()
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
const newCaseNumber = updateCaseNumber(false);

updateCaseTotalNumber(newCaseNumber);
currentSubTotal()
})
