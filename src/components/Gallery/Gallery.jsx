import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import GalleryCard from '../GalleryCard/GalleryCard';
import './Gallery.css';
import 'react-slideshow-image/dist/styles.css';
import birdsDeck from '../BirdsDeck';
import persian from './img/persian.jpg';

const properties = {
  duration: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: true,
};

const Gallery = () => {
  const [catsDeck, setCatsDeck] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(true);
  useEffect(() => {
    const myInit = {
      method: 'GET',
      headers: {
        'x-api-key': '1b113db6-32e6-4ba2-9a16-13e1f8eab027',
      },
    };

    fetch('https://api.thecatapi.com/v1/breeds/', myInit)
      .then((response) => response.json())
      .then((data) => {
        let randomStartIndex = Math.floor(data.length * Math.random());
        if (randomStartIndex > data.length - 20) {
          randomStartIndex = data.length - 20;
        }
        const finalIndex = randomStartIndex + 20;
        setCatsDeck(data.slice(randomStartIndex, finalIndex));
      });
  }, []);

  const handleToggleShow = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    catsDeck.length && (
      <div id="wrapper">
        <div className="filter">
          <button id="mobile-toggle" type="button" onClick={handleToggleShow}>
            Show {isDisplayed ? 'cats' : 'birds'}
          </button>
        </div>
        <div className="mobile-visible">
          <div className={isDisplayed ? 'show' : 'hide'}>
            <Slide {...properties}>
              <div className="each-slide bird-slide">
                {birdsDeck
                  .filter((bird, index) => index < 4)
                  .map((item) => (
                    <GalleryCard key={item.id} {...item} />
                  ))}
              </div>
              <div className="each-slide bird-slide">
                {birdsDeck
                  .filter((bird, index) => index >= 4 && index < 8)
                  .map((item) => (
                    <GalleryCard key={item.id} {...item} />
                  ))}
              </div>
              <div className="each-slide bird-slide">
                {birdsDeck
                  .filter((bird, index) => index >= 8 && index < 12)
                  .map((item) => (
                    <GalleryCard key={item.id} {...item} />
                  ))}
              </div>
              <div className="each-slide bird-slide">
                {birdsDeck
                  .filter((bird, index) => index >= 12 && index < 16)
                  .map((item) => (
                    <GalleryCard key={item.id} {...item} />
                  ))}
              </div>
              <div className="each-slide bird-slide">
                {birdsDeck
                  .filter((bird, index) => index >= 16 && index < 20)
                  .map((item) => (
                    <GalleryCard key={item.id} {...item} />
                  ))}
              </div>
            </Slide>
          </div>
          <div className={!isDisplayed ? 'show' : 'hide'}>
            <Slide {...properties}>
              <div className="each-slide cat-slide">
                {catsDeck
                  .filter((cat, index) => index < 4)
                  .map((item) => (
                    <GalleryCard
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      image={item.image.url ? item.image.url : persian}
                    />
                  ))}
              </div>
              <div className="each-slide cat-slide">
                {catsDeck
                  .filter((cat, index) => index >= 4 && index < 8)
                  .map((item) => (
                    <GalleryCard
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      image={item.image.url ? item.image.url : persian}
                    />
                  ))}
              </div>
              <div className="each-slide cat-slide">
                {catsDeck
                  .filter((cat, index) => index >= 8 && index < 12)
                  .map((item) => (
                    <GalleryCard
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      image={item.image ? item.image.url : persian}
                    />
                  ))}
              </div>
              <div className="each-slide cat-slide">
                {catsDeck
                  .filter((cat, index) => index >= 12 && index < 16)
                  .map((item) => (
                    <GalleryCard
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      image={item.image.url ? item.image.url : persian}
                    />
                  ))}
              </div>
              <div className="each-slide cat-slide">
                {catsDeck
                  .filter((cat, index) => index >= 16 && index < 20)
                  .map((item) => (
                    <GalleryCard
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      image={item.image.url ? item.image.url : persian}
                    />
                  ))}
              </div>
            </Slide>
          </div>
        </div>
        <div id="desktop-visible">
          {birdsDeck.map((bird) => (
            <GalleryCard key={bird.id} {...bird} />
          ))}
          {catsDeck.map((cat) => (
            <GalleryCard
              key={cat.id}
              name={cat.name}
              description={cat.description}
              image={cat.image.url ? cat.image.url : persian}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Gallery;
