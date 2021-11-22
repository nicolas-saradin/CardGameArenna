import { useState } from 'react';
// import useSound from './assets/sounds/sounds';
import birdDeck from './Utility/BirdDeck';
import shuffleDeck from './Utility/shuffleDeck';
import CardBack from './components/CardBack';
import Card from './components/Card/Card';
import './Game.css';
// import drawSound from '../assets/sounds/draw.wav';

// game logic
// start the game
// start of turn : auto draw a card => add card to hand / remove from deck
// player plays a card => remove card from hand
// resolve card effects => modify hit points => check if hitpoints <= 0 ? set game over : continue
// end of turn, player presses end of turn button => change active player ( turn )

const Game = () => {
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [AIHand, setAIHand] = useState([]);
  const [turn, setTurn] = useState('');
  const [gameOver, setGameOver] = useState(true);
  const [winner, setWinner] = useState('');
  const [hasPlayed, setHasPlayed] = useState(false);
  // const [activePlayer, setActivePlayer] = useState('');
  const [drawCardsPile, setDrawCardsPile] = useState([]);
  const [playerCardsPlayed, setPlayerCardsPlayed] = useState([]);
  const [AICardsPlayed, setAICardsPlayed] = useState([]);
  const [AIHitPoints, setAIHitPoints] = useState(5);
  const [playerHitPoints, setPlayerHitPoints] = useState(5);

  //   useEffect(() => {
  //     let myInit = {
  //       method: "GET",
  //       headers: {
  //        "x-api-key": "1b113db6-32e6-4ba2-9a16-13e1f8eab027"
  //       },
  //     };

  //     fetch("https://api.thecatapi.com/v1/breeds/", myInit)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   }, []);

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // const [playDrawSound] = useSound(drawSound);
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  // start the game
  const gameStart = () => {
    // decide who starts
    const players = ['Player1', 'AI'];
    setTurn(players[Math.floor(2 * Math.random())]);
    setGameOver(!gameOver);
    // shuffle birdDeck array
    const shuffledCards = shuffleDeck(birdDeck);

    // extract first 5 elements to player1 hand
    const player1Hand = shuffledCards.splice(0, 4);
    // playDrawSound();

    // extract first 5 elements to AI hand
    const AIHand = shuffledCards.splice(0, 4);
    // playDrawSound();

    // store all remaining cards into drawCardsPile
    const drawCardsPile = shuffledCards;
    // start of game
    setAIHitPoints(250);
    setPlayerHitPoints(250);
    setPlayer1Hand([...player1Hand]);
    setAIHand([...AIHand]);
    setDrawCardsPile([...drawCardsPile]);
  };

  // some util functions
  const handleChangeTurn = () => {
    setTurn('AI');
    setHasPlayed(!hasPlayed);
    // eslint-disable-next-line no-console
    console.log('ok');
  };

  // début du tour du joueur
  const startOfPlayerTurn = () => {
    // eslint-disable-next-line no-console
    console.log('turn = ', turn);
    // eslint-disable-next-line no-console
    console.log('start ok');
    const startingHand = [...player1Hand];
    // player draws
    if (
      gameOver === false &&
      turn === 'Player1' &&
      startingHand.length < 5 &&
      hasPlayed === false
    ) {
      // make a copy of the deck
      const copiedDrawCardPileArray = [...drawCardsPile];
      // eslint-disable-next-line no-console
      console.log('copied draw pile', copiedDrawCardPileArray);
      // pull out an element from it
      const drawCard = copiedDrawCardPileArray.pop();
      // eslint-disable-next-line no-console
      console.log('draw card :', drawCard);
      // insert in hand
      const copiedPlayer1Hand = [...startingHand];
      copiedPlayer1Hand.push(drawCard);

      setPlayer1Hand([...copiedPlayer1Hand]);
      // eslint-disable-next-line no-console
      console.log('starting hand =', startingHand);
      // eslint-disable-next-line no-console
      console.log('copied player1 Hand =', copiedPlayer1Hand);
      // eslint-disable-next-line no-console
      console.log('player1 hand : ', player1Hand);
      // playDrawSound();
    }
  };

  // réponse de l'AI

  if (gameOver === false && turn === 'AI' && AIHand.length < 5) {
    // make a copy of the deck
    const copiedDrawCardPileArray = [...drawCardsPile];
    // eslint-disable-next-line no-console
    console.log('copied draw pile', copiedDrawCardPileArray);
    // pull out an element from it
    const drawCard = copiedDrawCardPileArray.pop();
    // eslint-disable-next-line no-console
    console.log('draw card :', drawCard);
    // insert in hand
    const copiedAIHand = [...AIHand];
    copiedAIHand.push(drawCard);

    setAIHand([...copiedAIHand]);

    // eslint-disable-next-line no-console
    console.log('copied AI Hand =', copiedAIHand);
    // eslint-disable-next-line no-console
    console.log('ai hand : ', AIHand);
    // playDrawSound();

    // AI plays a card
    const randomIndex = Math.floor(AIHand.length * Math.random());

    const AISelectedCard = AIHand[randomIndex];

    const updatedAIHand = [
      ...copiedAIHand.slice(0, randomIndex),
      ...copiedAIHand.slice(randomIndex + 1),
    ];

    // display the card played
    setAICardsPlayed([
      // ...playedCardsPile.slice(0, playedCardsPile.length),
      <Card {...AISelectedCard} />,
      // ...playedCardsPile.slice(playedCardsPile.length),
    ]);

    // resolve effects<
    const reducedHitPoints = playerHitPoints - AISelectedCard.attack;
    const restoreHitPoints = AIHitPoints + AISelectedCard.hp;
    // check if it's a deathblow or not
    if (reducedHitPoints <= 0) {
      setPlayerHitPoints(0);
      setWinner('AI');
      setGameOver(!gameOver);
    } else {
      // update states and change turn
      setAIHand([...updatedAIHand]);
      setPlayerHitPoints(reducedHitPoints);
      setAIHitPoints(restoreHitPoints);
      setDrawCardsPile([...copiedDrawCardPileArray]);
      // end of turn

      setTurn('Player1');
    }
  } else {
    startOfPlayerTurn();
  }

  const onCardPlayedHandler = (playedCard) => {
    // extract the card played
    const removeIndex = player1Hand.indexOf(playedCard);
    // prepare the next state of player 1 hand
    const updatedPlayer1Hand = [
      ...player1Hand.slice(0, removeIndex),
      ...player1Hand.slice(removeIndex + 1),
    ];
    // display the card played
    setPlayerCardsPlayed([
      // ...playedCardsPile.slice(0, playedCardsPile.length),
      <Card {...playedCard} />,
      // ...playedCardsPile.slice(playedCardsPile.length),
    ]);
    // resolve effects
    const reducedHitPoints = AIHitPoints - playedCard.attack;
    const restoreHitPoints = playerHitPoints + playedCard.hp;
    // check if it's a deathblow or not
    if (reducedHitPoints <= 0) {
      setAIHitPoints(0);
      setWinner('Player');
      setGameOver(!gameOver);
    } else {
      // update states and change turn
      setPlayer1Hand([...updatedPlayer1Hand]);
      setAIHitPoints(reducedHitPoints);
      // eslint-disable-next-line no-console
      console.log(
        'Aller mon gars, tu lui mets',
        reducedHitPoints,
        'point de dégats dans les valoches'
      );
      setPlayerHitPoints(restoreHitPoints);
      setDrawCardsPile([...drawCardsPile]);
      setHasPlayed(true);
    }
  };

  return (
    <div className="board">
      {/* champ de l'AI */}
      <div className="AI player-field">
        <div className="deck-left">
          {drawCardsPile.length > 0 && (
            <div className="deck">
              <CardBack />
            </div>
          )}
        </div>
        <div className="aI-hand">
          {AIHand.map((item, i) => (
            <CardBack key={i} {...item} />
          ))}
        </div>
        <div className="avatar-info AI-bg">
          <p>HP : {AIHitPoints}</p>
          <img
            className="avatar"
            src={require(`./assets/birdAvatar.png`).default}
            alt="avatar-with-cat"
          />
        </div>
      </div>
      <div className="utility-area">
        {gameOver ? (
          <button
            type="button"
            className="game-start"
            onClick={() => gameStart()}
          >
            Start !
          </button>
        ) : (
          <button
            type="button"
            className={turn === 'Player1' ? 'player-turn' : 'AI-turn'}
            onClick={() => handleChangeTurn()}
          >
            End of turn
          </button>
        )}
        {gameOver && winner ? (
          <div className="winner-modal">The winner is : {winner}</div>
        ) : (
          <p className="info">It is {turn} turn to play.</p>
        )}
        {gameOver ? null : (
          <div className="cards-played">
            <div className="textCard"> Player plays </div> : {playerCardsPlayed}{' '}
            <div className="textCard"> AI plays </div> {AICardsPlayed}{' '}
          </div>
        )}
      </div>

      {/* champ du joueur */}
      <div className="Player player-field">
        <div className="avatar-info player-bg">
          <img
            className="avatar"
            src={require(`./assets/catAvatar.png`).default}
            alt="avatar-with-bird"
          />
          <p>HP : {playerHitPoints}</p>
        </div>
        <div className="player-hand">
          {player1Hand.map((item, i) => (
            <div 
              key={i}
              className="Card"
              onClick={
                turn === 'Player1' && !hasPlayed
                  ? () => onCardPlayedHandler(item)
                  : null
              }
            >
              <p className="card-title">{item.name}</p>
              <div className="card-image">
                <img className="animal-display" src={item.image} alt="animal" />
              </div>
              <p>Attack : {item.attack}</p>
              <p>Heal : {item.hp}</p>
            </div>
          ))}
        </div>
        <div className="deck-left">
          {drawCardsPile.length > 0 && (
            <div className="deck">
              <CardBack />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
