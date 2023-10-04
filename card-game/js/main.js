// Shuffle the cards
let deck_id = " "

fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
.then(res => res.json())
.then(data => {
  deck_id = data.deck_id
  // console.log(deck_id)
})
.catch(err => {
  console.log(`error ${err}`)
});



document.querySelector('button').addEventListener("click", getCards)

function getCards(){
  fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
  .then(res => res.json())
  .then(data => {
    console.log(data)

    let player1Val = Number(cardsVal(data.cards[0].value))
    let player2Val = Number(cardsVal(data.cards[1].value))
    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image

    if (player1Val > player2Val) {
      document.querySelector('h3').innerText = "Player 1 WON!"
    }else if (player2Val > player1Val) {
      document.querySelector('h3').innerText = "Player 2 WON!"
    }else {
      document.querySelector('h3').innerText = "WAR!"
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}

function cardsVal(val){
  if (val === "ACE") {
    return 14
  }else if (val === "KING") {
    return 13
  }else if (val === "QUEEN") {
    return 12
  }else if (val === "JACK") {
    return 11
  }else {
    return val
  }
}
