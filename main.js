function drawCard() {
    if (cards.length == 0) {
        playAgain()
    }
    else {
        let cardIndex = Math.floor(Math.random() * cards.length);
        let cardFace = cards[cardIndex];
        usedCards.push(cardFace);
        document.getElementById("activeCard").src = "cards/" + cardFace + ".svg";
        document.getElementById("gameName").innerHTML = cardFace;
        cards.splice(cardFace, 1);
    }
}

function resetGame() {
    document.getElementById("activeCard").src = "cards/00.svg";
    document.getElementById("gameName").innerHTML = "King's Cup";
    usedCards.length = 0;
    genCards()
}

function playAgain() {
    let response = confirm("Play again?");
    if (response) {
        resetGame();
        console.log(cards)
    }
    else {
        document.getElementById("activeCard").src = "";
    }
}