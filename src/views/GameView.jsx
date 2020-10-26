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
import Button from './../components/Button';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 }
};

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

  onSlideChange = event => {
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
          <Button
            value={'personas'}
            name={'Persona'}
            style={{ border: '1px solid yellow', color: 'yellow' }}
            onClick={this.handleClick}
          />
          <Button
            value={'tools'}
            name={'Tools'}
            style={{ border: '1px solid #e6004c', color: '#e6004c' }}
            onClick={this.handleClick}
          />
          <Button
            value={'challenges'}
            name={'Challenges'}
            style={{ border: '1px solid #1e8fd5', color: '#1e8fd5' }}
            onClick={this.handleClick}
          />
          <Button
            value={'starred'}
            name={'Your deck'}
            style={{ border: '1px solid green', color: 'green' }}
            onClick={this.handleClick}
          />
        </div>
        <Carousel
          paddingLeft={60}
          paddingRight={60}
          responsive={responsive}
          disableButtonsControls={true}
          disableDotsControls={true}
          onSlideChange={this.onSlideChange}
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
