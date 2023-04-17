const cards = [];
const usedCards = [];
const suits = {0: "S", 1: "C", 2: "H", 3: "D"};
const pips = {1: "A", 10: "T", 11: "J", 12: "Q", 13: "K"};
const images = [];
let kings = 0;
let rules = {};

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

function loadImages() {
    for (let i = 0; i < cards.length; i++) {
        let c = cards[i];
        images[i] = new Image();
        images[i].src = "cards/" + c + ".svg";
    }
}
loadImages();