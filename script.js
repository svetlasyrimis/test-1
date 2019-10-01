/* button initialized as object and drawing from deck of */

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
}
button.addEventListener("click", getData)



