var playerName = prompt('whats your name?');
//try leaving name prompt empty
if (playerName === "") {
    alert("ooh a mysterious one!")
    playerName = ('Mysterious one')
}
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let playerSelection;
let computerSelection;

//document.getElementById('rock').onclick = user;
//document.getElementById('paper').onclick = user;
//document.getElementById('scissors').onclick = user;

//function user(){
   // var userChoice = this.id;
    //console.log(playerName +" "+ userChoice);
//}

for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

function playGame(e){
    //setup player's selection
    playerSelection = e.target.innerText;
    //setup a random number to select for computer
    //gives random number between 1 and 3
    computerNumber =Math.random();
    console.log(computerNumber);

    //if computerSelection is less than .34, computer selects paper
    if (computerNumber < .34){
        computerSelection = 'paper';
    } else if (computerNumber <= .67){
        computerSelection = 'rock';
    } else {
        computerSelection = 'scissor';
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

            if (player === 'rock'){
                if(computer === 'paper'){
                    return 'Computer';
                } else {
                    return 'Player';
                }
            }

            if (player === 'paper'){
                if (computer === 'scissor'){
                    return 'Computer';
                } else {
                    return 'Player';
                }
            }

            if (player === 'scissor'){
                if (computer === 'rock'){
                    return 'Computer';
                } else {
                    return 'Player';
                }
            }
        }