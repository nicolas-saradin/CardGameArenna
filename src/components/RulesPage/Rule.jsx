import './Rule.css';

const rule = () => {
  return (
    <div className="rulePage">
      <h1>Game Rules</h1>
      <ul className="rules">
        <li>Both players have a 20-cards deck.</li>
        <li>Players start by drawing 1 card from their deck. </li>
        <li>A card is played in each round. </li>
        <li>A card is assigned to the player starting his turn.</li>
        <li>The loser is the one who comes first at zero health point. </li>
      </ul>
    </div>
  );
};

export default rule;
