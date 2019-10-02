// start button initialized as object and 
// drawing Player and Opponents hand
// as well as a card from the pile face up 

const button = document.querySelector("button")
const getData = async () => {
  const shuffleNewDeck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  console.log(shuffleNewDeck)
  const deckId = shuffleNewDeck.data.deck_id
  const playerDraws = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
  console.log(playerDraws)
  const opponentDraws = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
  console.log(opponentDraws)
  const topCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  console.log(topCard)
  
  const showPlayersCards = (cards) => {
    let john = document.querySelector('.players-cards')
    cards.forEach((card) => {
      let el = document.createElement('div');
      el.innerHTML = `<img src=${card.image} />`
      
      john.append(el)
    })
  }
  const showOpponentsCards = (cards) => {
    let chris = document.querySelector('.opponents-cards')
    cards.forEach((card) => {
      let enki = document.createElement('div');
      enki.innerHTML = `<img src=${card.image} />`
      chris.append(enki)
    })
  }
  const showTopCard = (cards) => {
    let tom = document.querySelector('.top-card')
    cards.forEach((card) => {
      let enlil = document.createElement('div');
      enlil.innerHTML = `<img src=${card.image} />`
      tom.append(enlil)
    })
  }
  showPlayersCards(playerDraws.data.cards)
  showOpponentsCards(opponentDraws.data.cards)
  showTopCard(topCard.data.cards)

}
button.addEventListener("click", getData)

// player chooses a card to throw on the discard pile 

const pickCard = () => { 

}

for (let i = 0; i < playerDraws.length; i += 1) {
   playerDraws[i].addeventlistener("click", pickCard)
  }



// const drawNewCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)










