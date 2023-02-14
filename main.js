const output = document.getElementById('output');

output.innerHTML = "Rock Paper Scissors go!"

const buttons = document.querySelectorAll('.btn');

const scores =  document.querySelectorAll('.scores')

console.log('hello world')


/// Take Input

// get input here

/// generate random choice

 //generate computer choice here

/// test against input (game logic)
//initialize variables
let userScore = 0;
let computerScore = 0;
let ties = 0;
let gameOutcome = '';
const gameEmojis = ['👋🏽', '✊🏽', '✌🏽']


const updateScore = (gameOutcome) =>{
    if (gameOutcome === 'user'){
        console.log('You Win!')
        userScore = userScore+1
    }
    if (gameOutcome === 'tie'){
        console.log('Its a tie!')
        ties = ties+1
    }
    if (gameOutcome === 'computer'){
        console.log('Computer Wins!')
        computerScore = computerScore+1
    }

    scores.forEach(score =>{
        if (score.id === "userScore"){
            score.innerHTML = userScore
        }
        
        if (score.id === "computerScore"){
            score.innerHTML = computerScore
        }

        if (score.id === "ties"){
            score.innerHTML = ties
        }

    })

}

const decideScore = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
        gameOutcome = 'tie';
    }else{
        if(userChoice === 1){
            if(computerChoice === 3){
                gameOutcome = 'user';
            }
            else{
                gameOutcome = 'computer';
            }
        }    
        if(userChoice === 2){
            if(computerChoice === 1){
                gameOutcome = 'user';
            }
            else{
                gameOutcome = 'computer';
            }
        }
        if(userChoice === 3){
            if(computerChoice === 2){
                gameOutcome = 'user';
            }
            else{
                gameOutcome = 'computer';
            }
        }
    }
    if(gameOutcome === 'computer'){
        output.innerHTML = `Computer chose: ${gameEmojis[computerChoice - 1]} They Won! 😭 Play again?`
    }else if (gameOutcome != 'tie'){
        output.innerHTML = `Computer chose: ${gameEmojis[computerChoice - 1]} You Won! 🎉 Play again?`
    }else{
        output.innerHTML = `Computer chose: ${gameEmojis[computerChoice - 1]} It was a tie! 😱 Play again?`
    }

    return gameOutcome
}

const gameLogic = (choice) => {

   console.log(choice)

    // //set the outcome of the game
    let userChoice = parseInt(choice);
    // generate computer choices
    let computerChoice = Math.floor(Math.random()*3)+1;
    //test for game outcome

    gameOutcome = decideScore(userChoice, computerChoice)

    /// current score + output
    updateScore(gameOutcome, computerChoice)
    // console.log(`The current score is: Ties: ${ties} User:${userScore} Computer:${computerScore}`);
    // playAgain();

}
// const playAgain = ()=>{
//     let continuePlay = parseInt(prompt('Play again? 1 = Yes // 2 = No.'));
//     if(continuePlay === 1){
//         gameLogic();
//     }

// }

buttons.forEach(button =>{
    button.addEventListener('click', event=>{
        gameLogic(event.target.id)
    })
})