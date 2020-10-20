import React from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GameView.scss';

import personas from './../data/persona.json';
import challenges from './../data/challenges.json';
import tools from './../data/tools.json';

import Card from './../components/Card';
import CardInfo from './../components/CardInfo';
import Footer from './../components/Footer';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: 'tools', starred: [] };
  }

  // const responsive = {
  //   0: { items: 1 },
  //   568: { items: 2 },
  //   1024: { items: 3 }
  // };

  handleClick = event => {
    this.setState({
      category: event.target.value
    });
  };

  render() {
    var data;
    switch (this.state.category) {
      case 'personas':
        data = personas;
        break;
      case 'challenges':
        data = challenges;
        break;
      case 'tools':
        data = tools;
        break;
      default:
        data = personas;
    }
    return (
      <div className="game">
        <div className="categories-bar">
          <button value={'personas'} onClick={this.handleClick}>
            Personas
          </button>
          <button value={'challenges'} onClick={this.handleClick}>
            Challenges
          </button>
          <button value={'tools'} onClick={this.handleClick}>
            Tools
          </button>
          <button value={'starred'} onClick={this.handleClick}>
            Your deck
          </button>
        </div>
        <Carousel
          mouseTracking
          // items={items}
          //activeIndex={2}
          paddingLeft={60}
          paddingRight={60}
          // responsive={responsive}
          disableButtonsControls={true}
          disableDotsControls={true}
        >
          {data.map(item => {
            return (
              <div key={item.title}>
                <Card image={item.image} />
                <CardInfo {...item} />
              </div>
            );
          })}
        </Carousel>
        <Footer />
      </div>
    );
  }
}

export default GameView;
