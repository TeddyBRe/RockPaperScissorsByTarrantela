function rockPaperScissors(input) {

    let playerTurn = input;
    

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';


    if (playerTurn == 'r' || playerTurn == 'rock') {
        playerTurn = rock;
    } else if (playerTurn == 'p' || playerTurn == 'paper') {
        playerTurn = paper;
    } else if (playerTurn == 's' || playerTurn == 'scissors') {
        playerTurn = scissors;

    } else {
        console.log('Invalid Input. Try again...');
    }

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerTurn = '';

    switch (computerRandomNumber) {
        case 1:
computerTurn = 'Rock'
            break;

        case 2:
            computerTurn = 'Paper'
            break;
        case 3:
computerTurn = 'Scissors'
            break;
    }

console.log(`The computer chooses ${computerTurn}`);
console.log(`You choose ${playerTurn}`);

if((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)  ){
    console.log('You win!');

}else if((playerTurn === rock && computerTurn === paper) || (playerTurn === paper && computerTurn === scissors) || (playerTurn === scissors && computerTurn === rock)  ){
    console.log('You lose!');

}else if((playerTurn === rock && computerTurn === rock) || (playerTurn === paper && computerTurn === paper) || (playerTurn === scissors && computerTurn === scissors)  ){
    console.log('This game was a draw!');

}

}
rockPaperScissors('r')