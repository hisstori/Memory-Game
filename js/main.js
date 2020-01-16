const cards = [ 
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  return "You found a match!";
} else {
  return "Sorry, try again.";
 }
};

function flipCard(cardId) { checkForMatch();
console.log('User flipped ' + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsInPlay.push('User flipped ' + cards[cardId].rank);
};
flipCard(0);
flipCard(2);

function createBoard() { 
for (let i = 0; i < createBoard.length; i++)
// Add each card to the board.

var cardElement = document.createElement("img");
cardElement.setAttribute("src", "image/back.png");
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('clickCard', flipCard();
document.setAttribute('body')[0].appendChild(cardElement);
};