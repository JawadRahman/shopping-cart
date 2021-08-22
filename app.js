function UpdateCaseNumber(product,price,isIncreasing){
    const caseInput = document.getElementById(product+'-number');
    let caseNumber =caseInput.value;
    if(isIncreasing == true){
        caseNumber=parseInt(caseNumber)+1;
    }
    else if(caseNumber>0){
        caseNumber=parseInt(caseNumber)-1;
    }
    caseInput.value= caseNumber;
    // update case total
    const caseTotal = document.getElementById(product+'-total');
    caseTotal.innerText = caseNumber * price; 
    // calculate total
    calculateTotal()

}
// handle case increase decrease events
document.getElementById('phone-plus').addEventListener('click',function(){
    UpdateCaseNumber('phon',1219,true);
    
});
document.getElementById('phone-minus').addEventListener('click',function(){
    UpdateCaseNumber('phon',1219,false);    
});

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click',function(){
    UpdateCaseNumber('case',59,true);
    
});

document.getElementById('case-minus').addEventListener('click',function(){
    UpdateCaseNumber('case',59,false);    
});

function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber =parseInt(productInput.value);
    return productNumber;
}


function calculateTotal(){
   
    const phoneTotal = getInputValue('phon') *1219;
    const caseTotal =  getInputValue('case')*59;
    const subTotal = phoneTotal + caseTotal;
    const tax= subTotal/10;
    const totalPrice = subTotal+tax;


    // Update on the HTMl 
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=totalPrice;
    
}
    

