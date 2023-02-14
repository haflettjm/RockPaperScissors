const output = document.getElementById('output');

output.innerHTML = "Rock Paper Scissors go!"

console.log('test')


/// Take Input

// get input here

/// generate random choice

 //generate computer choice here

/// test against input (game logic)
//initialize variables
// let userScore = 0;
// let computerScore = 0;
// let ties = 0;
// let gameOutcome = '';

// const gameLogic = () => {

//     //set the outcome of the game
//     let userChoice = parseInt(prompt('please enter your choice 1=rock 2=paper 3=scissors'));
//     // generate computer choices
//     let computerChoice = Math.floor(Math.random()*3)+1;
//     //test for game outcome
//     if(userChoice === computerChoice){
//         gameOutcome = 'tie';
//     }
//     if(userChoice === 1){
//         if(computerChoice === 3){
//             gameOutcome = 'computer';
//         }
//         else{
//             gameOutcome = 'user';
//         }
//     }    
//     if(userChoice === 2){
//         if(computerChoice === 1){
//             gameOutcome = 'computer';
//         }
//         else{
//             gameOutcome = 'user';
//         }
//     }
//     if(userChoice === 3){
//         if(computerChoice === 2){
//             gameOutcome = 'computer';
//         }
//         else{
//             gameOutcome = 'user';
//         }
//     }
//     /// current score + output
//     if (gameOutcome === 'user'){
//         console.log('You Win!')
//         userScore = userScore+1
//     }
//     if (gameOutcome === 'tie'){
//         console.log('Its a tie!')
//         ties = ties+1
//     }
//     if (gameOutcome === 'computer'){
//         console.log('Computer Wins!')
//         computerScore = computerScore+1
//     }
//     console.log(`The current score is: Ties: ${ties} User:${userScore} Computer:${computerScore}`);
//     playAgain();

// }
// const playAgain = ()=>{
//     let continuePlay = parseInt(prompt('Play again? 1 = Yes // 2 = No.'));
//     if(continuePlay === 1){
//         gameLogic();
//     }

// }

// gameLogic();