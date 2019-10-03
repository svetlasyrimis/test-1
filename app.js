const button = document.querySelector("button")
const playGame = async () => {
  const shuffleNewDeck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  console.log(shuffleNewDeck)
  let score = 0;
  const playerDraws = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  console.log(playerDraws)
  
  while (score < 5 && score < shuffleNewDeck.length) {
    let nextCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    if (guess(currentCard, nextCard)) {
      score += 1;
      console.log(`Congratulations! You scored a point. Your total score is now ${score}!`);
    } else {
      console.log(`Sorry, no points for you. Your total score is still ${score}`)
    };
    currentCard = nextCard;
  }
  deck.length !== 0 ? console.log("Nice job! You win!") : console.log("Oh no! You're out of cards and out of luck. You have lost :(");
}

playGame();
  }

    
      