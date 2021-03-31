function PizzaCalculation(){
    let coworkerTotal = parseInt(prompt("How many of you are there including you?"))
    let toppingsAmount = parseInt(prompt("How many toppings are you getting?"))

    let grandTotal = (15+(1.25*toppingsAmount));
    alert(`Your grandtotal is $${grandTotal} split ${coworkerTotal} ways, you each owe $${grandTotal/coworkerTotal}`)
}