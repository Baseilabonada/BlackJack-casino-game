let sum = 0;
let Card = [];
let hasBlackJack = false;
let isAlive = false;
let masseage = "";
let masseageEL = document.getElementById("masseage-el");
let sumEL = document.getElementById("sum-el");
let cardEL = document.getElementById("card-el");
let player = {
  Name: "BASEIL ABO NADA ",
  Chips: "200",
};
let playerEL = document.getElementById("player-el");
playerEL.textContent = player.Name+"  :  "+ "$"+ player.Chips

function startGame() {
  let firstCard = getRandom();
  let secondCard = getRandom();
  Card = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}
function renderGame() {
  if (sum < 21) {
    masseage = "Do You Want To Draw A New Card ?";
  } else if (sum === 21) {
    masseage = "Whoow You've Got BlackJack";
    hasBlackJack = true;
  } else {
    masseage = " You'r Out Of The Game ";
    isAlive = false;
  }
  masseageEL.textContent = masseage;
  sumEL.textContent = `Sum : ${sum}`;
  cardEL.textContent = "Cards :";
  for (let i = 0; i < Card.length; i++) {
    cardEL.textContent += Card[i] + " ";
  }
}
function newCared() {
  if (isAlive === true && hasBlackJack === false) {
    let card = Math.round(Math.random() * 11) + 2;
    sum += card;
    Card.push(card);
    renderGame();
  }
}

function getRandom() {
  let randomNumber = Math.round(Math.random() * 11) + 2;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
