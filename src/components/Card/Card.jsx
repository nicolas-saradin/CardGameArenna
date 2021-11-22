import React from 'react';
import './Card.css';

const Card = ({ name, image, attack, onCardPlayedHandler }) => {
  return (
    <div
      className="Card"
      onClick={() => onCardPlayedHandler()}
      onKeyPress={onCardPlayedHandler}
      role="button"
      tabIndex="-1"
    >
      <p className="card-title">{name}</p>
      <div className="card-image">
        <img className="animal-display" src={image} alt="animal" />
      </div>
      <p>Attack : {attack}</p>
    </div>
  );
};

export default Card;
