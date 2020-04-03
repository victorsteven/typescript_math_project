/// <reference path="player.ts" />

function startGame() {
  //starting a new game

  let playerName: string | undefined = getInputValue('playername');
   logPlayer(playerName)


   postScore(130, playerName)
   postScore(-5, playerName)


  // var messagesElement = document.getElementById('messages');
  // messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: string = 'MultiMath Player'): void {
  console.log(`the name is ${name}`)
}

function getInputValue(elementID: string): string | undefined {

  //asserting that document.getElementById(elementID) is of type HTMLInputElement
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value
  }
}

function postScore(score: number, playerName: string = 'Tony Brown'): void {

  //logger is of type function and the return value of the function is void
  let logger: (value: string) => void;
  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');

  //exclamation is saying that "scoreElement cannot be null"
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`);
  
}

//The "!" tells typescript that the object is not null
document.getElementById('startGame')!.addEventListener('click', startGame);  

const logMessage = (message: string): void => console.log(message)
// logMessage('Welcome')

function logError(err: string): void {
  console.error(err)
}
// let myResult: Result = {
//   playerName: 'mike',
//   score: 5,
//   problemCount: 5,
//   factor: 7
// };

// let Player: Person = {
//   name: 'Daniel',
//   formatName: () => 'Dan'
// }

const firsPlayer: Player = new Player()
firsPlayer.name = 'Steven'
console.log('the player name:  ', firsPlayer.name)
