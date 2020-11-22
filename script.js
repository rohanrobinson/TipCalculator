function calculateTip(bill, tipPercent) {

    const fraction = tipPercent/100;
    
    const multiplier = 1 + fraction;

    const totalBill = bill * multiplier;
    
    const tipAmount = totalBill - bill;

    return [totalBill, tipAmount];

}





setInterval(() => {
     


    let bill = document.getElementById("bill").value;

    let tipPercent = document.getElementById("tipPercent").value;

    

    let totalBill = document.getElementById("totalBill");
    let tipAmount = document.getElementById("tipAmount");
    
    totalBill.innerText = calculateTip(bill, tipPercent)[0];
    tipAmount.innerText = calculateTip(bill, tipPercent)[1];



  }, 3000);







