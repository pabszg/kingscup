const cards = [];
const usedCards = [];
const suits = {0: "S", 1: "C", 2: "H", 3: "D"};
const pips = {1: "A", 10: "T", 11: "J", 12: "Q", 13: "K"};

for (let i = 2; i < 10; i++) {
    pips[i] = i;
}

function genCards() {
    for (let s = 0; s < 4; s++) {
        for (let c = 1; c < 14; c++) {
            cards.push(pips[c] + suits[s]);
        }
      }
}
genCards();

function drawCard() {
    if (cards.length == 0) {
        playAgain()
    }
    else {
        let cardIndex = Math.floor(Math.random() * cards.length);
        let cardFace = cards[cardIndex];
        usedCards.push(cardFace);
        document.getElementById("activeCard").src = "/cards/" + cardFace + ".svg";
        cards.splice(cardFace, 1);
    }
}

function resetGame() {
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
        document.getElementById("play").innerHTML = "Game Over"
        document.getElementById("activeCard").src = "";
    }
}