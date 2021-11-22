import React, { useState } from 'react';
import './GalleryCard.css';

const GalleryCard = (props) => {
  const { name, image, description } = props;
  const [isExamined, setIsExamined] = useState(false);
  const examineCard = () => {
    setIsExamined(!isExamined);
  };
  return (
    <div
      className={isExamined ? 'examined' : 'Card'}
      onClick={examineCard}
      onKeyPress={examineCard}
      role="button"
      tabIndex="-1"
    >
      <p className="card-title">{name}</p>
      <div className="card-image">
        <img className="animal-display" src={image} alt="animal" />
      </div>
      <p className="description">
        {!isExamined ? 'Click or touch to learn about the animal' : description}
      </p>
    </div>
  );
};

export default GalleryCard;
