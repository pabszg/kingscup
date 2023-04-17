function newGame() {
    document.getElementById("start").style.display = "none";
    document.getElementById("cardContainer").style.display = "flex";
    document.getElementById("kingCount").innerHTML = 4-kings;
    rules = classicSpanish;
}

function kingCheck(c) {
    if (c === "K") {
        kings++;
        console.log(kings);
        document.getElementById("kingCount").innerHTML = 4-kings;
        document.getElementById("kingCount").className = "activeCount";
        document.getElementById("gameName").className = "activeKing";
    }
    if (kings === 4) {
        alert("Drink the cup!");
        resetGame();
    }
}

function drawCard() {
    if (cards.length === 0) {
        playAgain()
    }
    else {
        document.getElementById("gameName").classList.remove("activeKing");
        document.getElementById("kingCount").classList.remove("activeCount");
        let cardIndex = Math.floor(Math.random() * cards.length);
        let cardFace = cards[cardIndex];
        let c = cardFace[0]
        document.getElementById("activeCard").src = "cards/" + cardFace + ".svg";
        document.getElementById("gameName").innerHTML = rules[c].ruleName;
        document.getElementById("gameDesc").innerHTML = rules[c].ruleDescription;
        usedCards.push(cardFace);
        console.log(usedCards);
        cards.splice(cards.indexOf(cardFace), 1);
        kingCheck(c);
    }
}

function resetGame() {
    usedCards.length = 0;
    kings = 0;
    document.getElementById("activeCard").src = "cards/00.svg";
    document.getElementById("gameName").innerHTML = "King's Cup";
    document.getElementById("kingCount").innerHTML = 4-kings;
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