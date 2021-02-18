let numBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let rolledDice = false;
let rollCount = 0;

let rollButton = document.getElementById("rollDice");

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

})





document.addEventListener("click", function numSelect(e) {
    let numPicked = e.target;
    let count = 0;
    if(numPicked.nodeName !== "P" || rolledDice === false || total < 0) {
        return;
    }

    // do i need to parse these??
    let diceOne = parseInt(diceNum1.innerHTML);
    let diceTwo = parseInt(diceNum2.innerHTML);

    let total = diceOne + diceTwo;


    // the code below minuses the number selected from the total, ensuring players do not pick invalid numbers.
    while(total > -1) {
        total -= parseInt(numPicked.innerHTML);
    }
    
    // I need to write code that would work out which numbers can be selected depending on which total is rolled. Doesnt have to be highlighted on screen just so that the game knows which numbers the player can select as they roll the dice. 

    // each number can be assigned an 'available' class. This can then be removed when necessary.

});


// need to write a function that calculates the numbers available for selection from the dice rolled and all possible combinations.



function numsToSelect(total, firstPick) {
    
    let boardSlice = [];
    //creates array with all no.s upto and including total but not including the first pick eg a total roll of 9 and a first selection out of two of 3 would produce the array 
    // [1, 2, 4, 5, 6, 7, 8, 9]
    let firstPickNum = firstPick.innerHTML;
    
    for (let i = 0; i < 12; i++) {
        if(total === numBoard[i]) {
            boardSlice = numBoard.slice(0, i+1);
        };
        if(firstPickNum === numBoard[i]) {
            boardSlice.splice(i, 1);
        }
    };

   // once first pick is made, other numbers can then be eliminated from the selection, eg in the above case with 3 as the first pick, the array can be altered to look like [1, 2, 4, 5, 6];

    

    





}







