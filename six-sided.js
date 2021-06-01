const dieRoll = Math.random()
console.log(dieRoll);

if (dieRoll < .165) {
    console.log('You rolled a ', Math.ceil((dieRoll) * 1));
}
else if (dieRoll < .33) {
    console.log('You rolled a ', Math.ceil((dieRoll) *2));
}
else if (dieRoll < .495) {
    console.log('You rolled a ', Math.ceil(dieRoll) *3);
}
else if (dieRoll < .66) {
    console.log('You rolled a ', Math.ceil(dieRoll) *4);
}
else if (dieRoll < .825) {
        console.log('You rolled a ', Math.ceil(dieRoll) *5);
}
else if (dieRoll < .999) {
    console.log("You rolled a ", Math.ceil(dieRoll) * 6);
}