var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: "images/king-of-diamonds.png"
  }
];

var gameboard = document.getElementById('game-board');

var createBoard =  function(){
  for (var i=0; i< cards.length; i++ ){
    var cardElement = document.createElement('img');
    // console.log(cards[i]);
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.addEventListener('click', flipCard);
    gameboard.appendChild(cardElement);
  }
}

var cardsInPlay = [];
var showResults = document.getElementById('score');

var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    cardsInPlay.pop();
    cardsInPlay.pop();
    showResults.textContent = "It's a Match!";
    setTimeout(function(){
      showResults.textContent = "";
    }, 1000);
  } else {
    showResults.textContent = "Sorry! Please try again!";
  }
}
var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  // console.log("User flipped " + cards[cardId].rank);
  // console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);

  if(cardsInPlay.length === 2){
    checkForMatch();
  }
}

createBoard();

//TODO flip card animation effect
//randomly arrange cards array. not always load same sequence
//feedback for the scores
