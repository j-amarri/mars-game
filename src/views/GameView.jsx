import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GameView.scss';

// Importing data
import personas from './../data/persona.json';

import FilterBar from './../components/FilterBar';
import Card from './../components/Card';
import CardInfo from './../components/CardInfo';
import Footer from './../components/Footer';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personas };
  }

  // const responsive = {
  //   0: { items: 1 },
  //   568: { items: 2 },
  //   1024: { items: 3 }
  // };

  render() {
    // const listCardImages = this.state.personas.map(persona => (
    //   <Card props={persona.image} />
    // ));
    // console.log(listCardImages);
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
          <Card image={personas[0].image} />
          <Card image={personas[1].image} />
          <Card image={personas[2].image} />
        </AliceCarousel>
        <CardInfo props={personas} />
        <Footer />
      </div>
    );
  }
}

export default GameView;
