let numBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];




let rolledDice = false;
let rollCount = 0;

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

if (total === 0) {
    rolledDice = false;
    rollCount = 0;
    
    
}

//!! WILL THE PLAYER BE ABLE TO SELECT AN INVALID NUMBER??

document.addEventListener("click", function numSelect(e) {
    let selection = e.target;
    let numPicked = parseInt(selection.innerHTML);

    
    if(selection.nodeName !== "P" || rolledDice === false || total < 1 || numPicked > total || !numIsAvailable(total, numPicked)) {
        return;
    }

    selection.setAttribute("class", "selected");
    selection.removeAttribute("class", "unselected");
    
    
    // the code below minuses the number selected from the total, ensuring players do not pick invalid numbers.
    if(total > 0) {
        total -= numPicked;
    }


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

function isEndOfGame (total, arr) {
    
    
    let unselectedNums = [];
    let unselected = document.querySelectorAll("p.unselected");
    // loops through unselected array and adds innerHTML to unselectedNums array.
    for (let i = 0; i < unselected.length; i++) {
        unselectedNums.push(unselected[i].innerHTML)
    };

    // for each num in unselectedNums array, deletes numbers > total
    unselectedNum.forEach(num => {
        if (num > total) {
            unselectedNums.splice((unselectedNums.indexOf(num)), 1);
        }
    });

    // generates a total of numbers left in unselectedNums array. Initial figure is set to 0 to deal with the possibility of an empty array, meaning there are no numbers less than the total on the board.
    let reducedArrTotal = unselectedNums.reduce((acc, curr) => {
        return acc + curr;
    },0);

    // returns true (is end of game?) if unselectedNums is an empty array.
    if (reducedArrTotal === 0) {
        return true;
    }

    // returns false (is end of game?) if total is === to a number in unselectedNums. eg. if you roll a 5 and 5 is left on the board.
    for (let i = 0; i < unselectedNums.length; i++) {
        if (total === unselectedNums[i]) {
            return false;
        }
    };

    // at this stage in the function, the only thing to assess as to whether the game is over is to work out all possible combinations of the remaining numbers 

    function isSum() {

        

        // this function needs to determine whether the numbers remaining in the unselectedNums array (all remain no.s on the board less all no.s > total) add up to the total or equal the total. Need to include all possible combinations that can be used for every scenario. This isEndOfGame function will need to be run before every selection. 
        // things to note; I wont know how long the array is.
        let sum = 0;
        

        // the nested loop (hopefully) will provide the solution!! work in progress, currently adds to the sum variable the array[j] to give a running total. Maybe i can stop this loop when it reaches the total?
        for (let i = 0; i < unselectedNums.length; i++) {
            for (let j = 0; j < unselectedNums.length; i++) {
                 if (unselectedNums[i] !== unselectedNums[j]) {
                    sum += unselectedNums[j];
                }
            }
        }

        
        // how do i find out the sum of all cominations of numbers if i dont know how long the array will be? 
        // might be possible to use the reduce method somehow. 

        







    }



    
    
    
    (reducedArrTotal > total || !isSum)


}







