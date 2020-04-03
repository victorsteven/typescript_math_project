function startGame() {
    //starting a new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(130, playerName);
    postScore(-5, playerName);
    // var messagesElement = document.getElementById('messages');
    // messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("the name is " + name);
}
function getInputValue(elementID) {
    //asserting that document.getElementById(elementID) is of type HTMLInputElement
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'Tony Brown'; }
    //logger is of type function and the return value of the function is void
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    //exclamation is saying that "scoreElement cannot be null"
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
}
//The "!" tells typescript that the object is not null
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
// logMessage('Welcome')
function logError(err) {
    console.error(err);
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
var firsPlayer = new Player();
firsPlayer.name = 'Steven';
console.log('the player name:  ', firsPlayer.name);
