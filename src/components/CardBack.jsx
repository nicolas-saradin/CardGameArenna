import React from 'react';

const CardBack = () => {
  return (
    <div>
      <img
        className="Card"
        src={require('../assets/card-back.jpeg').default}
        alt="card-back"
      />
    </div>
  );
};

export default CardBack;
