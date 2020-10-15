import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function GameView() {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item">Landing on Mars</div>,
    <div className="item">Developing on Mars</div>,
    <div className="item">Testing on Mars</div>,
    <div className="item">Delivering on Mars</div>
  ];

  return (
    <div className="App">
      <h1>Game and Cards</h1>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
      />
    </div>
  );
}

export default GameView;




