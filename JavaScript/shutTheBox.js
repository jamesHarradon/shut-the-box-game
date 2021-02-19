let numBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let rolledDice = false;
let rollCount = 0;
let selectionCount = 0;
let total = 0;
let rollButton = document.getElementById("rollDice");

// dice roll
rollButton.addEventListener("click", function rollDice(e) {
    e.preventDefault;
    if (rollCount > 0) {
        return;
    }
    // add to above so that rollCount is reset when the first selection has been made.

    let diceNum1 = document.getElementById("diceRollOne")
    diceNum1.innerHTML = Math.ceil(Math.random()*6);
    let diceNum2 = document.getElementById("diceRollTwo")
    diceNum2.innerHTML = Math.ceil(Math.random()*6);
    rolledDice = true;
    rollCount++;
    // do i need to parse these?
    let diceOne = parseInt(diceNum1.innerHTML);
    let diceTwo = parseInt(diceNum2.innerHTML);
    total = diceOne + diceTwo
    prompt("Please make your selection to continue.")
})



//!! WILL THE PLAYER BE ABLE TO SELECT AN INVALID NUMBER??

document.addEventListener("click", function numSelect(e) {
    let selection = e.target;
    let numPicked = parseInt(selection.innerHTML);

    if (total === 0) {
        rolledDice = false;
        rollCount = 0;
        selectionCount = 0;
    }
    
    if(selection.nodeName !== "P" || rolledDice === false || total < 1 || numPicked > total || !numIsAvailable(total, numPicked)) {
        return;
    }

    selection.setAttribute("class", "selected");
    
    
    // the code below minuses the number selected from the total, ensuring players do not pick invalid numbers.
    while(total > 0) {
        total -= numPicked;
    }

    
    selectionCount++;

    

});

    // below function determines whether number can be selected and provides a boolean value for the selection event listener as a condition.
function numIsAvailable(total, pick) {
    
    let playerSelection = parseInt(pick.innerHTML);

    if ((total - playerSelection) >= 0) {
        return true;
    } else {
        return false;
    }
}







