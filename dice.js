// Generate random number 1–6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Roll all dice
function rollDice() {
    document.getElementById("d1").value = rollDie();
    document.getElementById("d2").value = rollDie();
    document.getElementById("d3").value = rollDie();
    document.getElementById("d4").value = rollDie();
    document.getElementById("d5").value = rollDie();
}
