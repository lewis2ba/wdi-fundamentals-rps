////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove==="scissors"&&computerMove==="scissors"){
        winner = "tie";
    }
    else if(playerMove==="scissors"&&computerMove==="rock"){
        winner = "computer";
    }
    else if(playerMove==="scissors"&&computerMove==="paper"){
        winner = "player";
    }
    else if(playerMove==="rock"&&computerMove==="rock"){
        winner = "tie";
    }
    else if(playerMove==="rock"&&computerMove==="scissors"){
        winner = "player";
    }
    else if(playerMove==="rock"&&computerMove==="paper"){
        winner = "computer";
    }
    else if(playerMove==="paper"&&computerMove==="paper"){
        winner = "tie";
    }
    else if(playerMove==="paper"&&computerMove==="rock"){
        winner = "player";
    }
    else{
        winner = "computer";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var counter = 1;
    var playerMove;
    var computerMove;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins<=5||computerWins<=5){
        console.log("Round "+counter)
        playerMove = getPlayerMove();
        console.log("Player plays "+playerMove);
        computerMove = getComputerMove();
        console.log("Computer plays "+computerMove);
        winner = getWinner(playerMove,computerMove);
        console.log("The Winner is: "+winner);
        if(winner === "player"){
            playerWins+=1;
        }
        else if(winner==="computer"){
            computerWins+=1;
        }
        else{
            console.log("It's a tie!");
        }
        console.log("Score after Round "+counter+" Computer: "+computerWins+" Player: "+playerWins);
        counter +=1;
    }
    if(playerWins===5){
        console.log("You win!");
    }
    else{
        console.log("The Computer won, better luck next time.");
    }
    return [playerWins, computerWins];
}

