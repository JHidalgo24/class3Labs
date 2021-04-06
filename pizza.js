$(document).ready(function () {
    $("#pizzaButton").on("click",pizzaCalculation);
});


function pizzaCalculation(){
    let coworkerTotal = parseFloat($("#coworkerTotal").val());
    let toppingsAmount = parseFloat($("#toppingsAmount").val());

    let grandTotal = (15+(1.25*toppingsAmount));
    grandTotal = grandTotal.toFixed(2);
    $("#pizzaOutput").text(`Your grandtotal is $${grandTotal} split ${coworkerTotal} ways, you each owe $${(grandTotal/coworkerTotal).toFixed(2)}`);
}
