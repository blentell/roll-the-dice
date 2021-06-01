const prompt = require('prompt-sync')();
const sudoDieRoll = Math.random();
console.log(sudoDieRoll);

const diceNum = Number(prompt('How many sides should the dice have? '));
const dieRoll = Math.floor(sudoDieRoll * diceNum) + 1;

console.log(dieRoll);

