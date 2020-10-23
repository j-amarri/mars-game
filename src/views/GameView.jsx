import React from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GameView.scss';

import personas from './../data/persona.json';
import challenges from './../data/challenges.json';
import tools from './../data/tools.json';

import Card from './../components/Card';
import InfoPersona from '../components/InfoPersona';
import InfoChallenge from '../components/InfoChallenge';
import InfoTool from '../components/InfoTool';
import Footer from './../components/Footer';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: 'personas', cardIndex: 0, starred: [] };
  }

  handleClick = event => {
    this.setState({
      category: event.target.value
    });
  };

  onSlideChanged = event => {
    this.setState({
      cardIndex: event.item
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
          disableButtonsControls={true}
          disableDotsControls={true}
          onSlideChanged={this.onSlideChanged}
        >
          {data.map(item => {
            return (
              <div key={item.title}>
                <Card image={item.image} />
              </div>
            );
          })}
        </Carousel>

        {this.state.category === 'personas' ? (
          <InfoPersona {...data[this.state.cardIndex]} />
        ) : this.state.category === 'challenges' ? (
          <InfoChallenge {...data[this.state.cardIndex]} />
        ) : this.state.category === 'tools' ? (
          <InfoTool {...data[this.state.cardIndex]} />
        ) : (
          'error'
        )}
        <Footer />
      </div>
    );
  }
}

export default GameView;
