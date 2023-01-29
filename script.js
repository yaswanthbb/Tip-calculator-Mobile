let tipAmountvalue = document.getElementById("tipAmount");
let totalAmountvalue = document.getElementById("totalAmount");
function buttonCalculate(){
    let bill = document.getElementById("billAmount").value;
    let tip = document.getElementById("tipPer").value;
    let billvalue = parseInt(document.getElementById("billAmount").value);
    let tipercentage = parseInt(document.getElementById("tipPer").value);
    let calculatedTip = billvalue*tipercentage/100;
    let calculatedAmount = billvalue+calculatedTip;
    if (bill == "" || tip == ""){
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input !!";
    }
    else{
    tipAmountvalue.value = calculatedTip;
    totalAmountvalue.value = calculatedAmount;
    } 
}