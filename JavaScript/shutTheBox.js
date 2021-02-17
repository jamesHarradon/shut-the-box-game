let rolledDice = false;
let rollCount = 0;

let rollButton = document.getElementById("rollDice");

rollButton.addEventListener("click", function rollDice(e) {
    e.preventDefault;
    if (rollCount > 1) {
        return;
    }
    // add to above so that rollCount is reset when the first selection has been made.

    let diceNum1 = document.getElementById("diceRollOne")
    diceNum1.innerHTML = Math.ceil(Math.random()*6);
    let diceNum2 = document.getElementById("diceRollTwo")
    diceNum2.innerHTML = Math.ceil(Math.random()*6);
    rolledDice = true;
    rollCount++;

})





document.addEventListener("click", function numSelect(e) {
    let numPicked = e.target;
    let count = 0;
    if(numPicked.nodeName !== "P" || rolledDice === false || total < 0) {
        return;
    }

    let diceOne = parseInt(diceNum1.innerHTML);
    let diceTwo = parseInt(diceNum2.innerHTML);

    let total = diceOne + diceTwo;

    while(total > -1) {
        total -= parseInt(numPicked.innerHTML);
    }
    
    if (total )

)};










