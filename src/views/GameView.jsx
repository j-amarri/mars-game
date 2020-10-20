import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GameView.scss';

// Importing data
import personas from './../data/persona.json';
import challenges from './../data/challenges.json';

import FilterBar from './../components/FilterBar';
import Card from './../components/Card';
import CardInfo from './../components/CardInfo';
import Footer from './../components/Footer';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: 'challenges' };
  }

  // const responsive = {
  //   0: { items: 1 },
  //   568: { items: 2 },
  //   1024: { items: 3 }
  // };

  render() {
    var data;
    if (this.state.category === 'personas') {
      data = personas;
    } else if (this.state.category === 'challenges') {
      data = challenges;
    }
    console.log(data);
    return (
      <div className="game">
        <FilterBar />
        <AliceCarousel
          mouseTracking
          // items={items}
          //activeIndex={2}
          paddingLeft={50}
          paddingRight={50}
          // responsive={responsive}
          disableButtonsControls={true}
          disableDotsControls={true}
        >
          {data.map(item => {
            return <Card {...item} key={item.image} />;
          })}
        </AliceCarousel>
        <CardInfo props={personas} />
        <Footer />
      </div>
    );
  }
}

export default GameView;