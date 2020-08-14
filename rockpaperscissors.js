var playerName = prompt('whats your name?');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let playerSelection;
let computerSelection;
document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;

function user(){
    var userChoice = this.id;
    console.log(playerName +" "+ userChoice);
}

for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

function playGame(e){
    //setup player's selection
    playerSelection = e.target.innerText;
    //setup a random number to select for computer
    //selects a number between 0 and 1 (1 not-inclusive)
    computerSelection = ((Math.random()*3)+1);

    //if computerSelection is less than .34, computer selects Rock
    if (computerSelection = 1){
        computerSelection = 'Rock';
    } else if (computerSelection = 2){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    console.log(computerSelection);
    document.getElementById('results').innerHTML = playerName + " chose " + playerSelection + ", " + "computer chose " + computerSelection;


let result = checkWinner(playerSelection, computerSelection);

            //output scores
            if (result === 'Player'){
                result += ' wins!';
                //update score
                winnerScores[0]++;
            }

            if (result === 'Computer'){
                result += ' wins!';
                winnerScores[1]++;
            }

            if (result === 'Draw'){
                result += '. It\'s a tie!'
            }

            //output score into Score DIV
            score.innerHTML = 'Player: [ ' + winnerScores[0]+ ' ] Computer: [ ' + winnerScores[1] + ' ]';

            //output player and computer's selections
            messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);

}

function messenger(selectionMessage){
            message.innerHTML = selectionMessage;
        }

        function checkWinner(player, computer){
            console.log(`${typeof player} ${player}`);
            console.log(`${typeof computer} ${computer}`);
            if (player === computer){
                return 'Draw';
            }

            if (player === 'Rock'){
                if(computer === 'Paper'){
                    return 'Computer';
                } else {
                    return 'Player';
                }
            }

            if (player === 'Paper'){
                if (computer === 'Scissors'){
                    return 'Computer';
                } else {
                    return 'Player';
                }
            }

            if (player === 'Scissors'){
                if (computer === 'Rock'){
                    return 'Computer';
                } else {
                    return 'Player';
                }
            }
        }