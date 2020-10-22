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
            if (item.type === 'persona') {
              return (
                <div key={item.title}>
                  <Card image={item.image} />
                  <InfoPersona {...item} />
                </div>
              );
            } else if (item.type === 'tool') {
              return (
                <div key={item.title}>
                  <Card image={item.image} />
                  <InfoTool {...item} />
                </div>
              );
            } else if (item.type === 'challenge') {
              return (
                <div key={item.title}>
                  <Card image={item.image} />
                  <InfoChallenge {...item} />
                </div>
              );
            } else {
              return <h1>Error</h1>;
            }
          })}
        </Carousel>
        <Footer />
      </div>
    );
  }
}

export default GameView;
