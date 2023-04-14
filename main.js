function newGame() {
    document.getElementById("start").style.display = "none";
    document.getElementById("cardContainer").style.display = "flex";
    document.getElementById("kingCount").innerHTML = 4-kings;
}

function drawCard() {
    if (cards.length == 0) {
        playAgain()
    }
    else {
        let cardIndex = Math.floor(Math.random() * cards.length);
        let cardFace = cards[cardIndex];
        let c = cardFace[0]
        if (c == "K") {
            kings++;
            console.log(kings)
            document.getElementById("kingCount").innerHTML = 4-kings;
        }
        document.getElementById("activeCard").src = "cards/" + cardFace + ".svg";
        document.getElementById("gameName").innerHTML = classicRules[c].ruleName;
        document.getElementById("gameDesc").innerHTML = classicRules[c].ruleDescription;
        usedCards.push(cardFace);
        console.log(usedCards)
        cards.splice(cards.indexOf(cardFace), 1);
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