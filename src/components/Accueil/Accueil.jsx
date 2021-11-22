import React from 'react';
import './Accueil.css';
import Birds from './Birds.png';
import Cats from './Cats.png';
import Versus from './Versus.png';

const Accueil = () => {
  return (
    <div>
      <div className="divHeader">
        <h2>Welcome my friends make your choice</h2>
        <div className="birdsVScats">
          <a href="./Game">
            <img src={Birds} alt="Birds" className="birds" />
          </a>
          <img src={Versus} alt="Versus" className="versus" />
          <a href="./Game">
            <img src={Cats} alt="Cats" className="cats" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
