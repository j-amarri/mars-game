import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GameView.scss';

import FilterBar from './../components/FilterBar';
import Footer from './../components/Footer';

function GameView() {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src="/images/mars.png" alt="card" onDragStart={handleDragStart} className="card" />,
    <img src="/images/mars.png" alt="card" onDragStart={handleDragStart} className="card" />,
    <img src="/images/mars.png" alt="card" onDragStart={handleDragStart} className="card" />,
    <img src="/images/mars.png" alt="card" onDragStart={handleDragStart} className="card" />
  ];

  return (
    <div className="game">
      <FilterBar />
      <AliceCarousel
        mouseTracking
        items={items}
        activeIndex={2}
        paddingLeft={50}
        paddingRight={50}
        responsive={responsive}
        disableButtonsControls={true}
        disableDotsControls={true}
      />
      <Footer />
    </div>
  );
}

export default GameView;




