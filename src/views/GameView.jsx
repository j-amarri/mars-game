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

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 }
// };

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: 'personas', cardIndex: 0, starred: [] };
  }

  handleCategoryClick = event => {
    this.setState({
      category: event.target.value,
      cardIndex: 0
    });
  };

  handleStarClick = item => {
    this.setState({
      starred: this.state.starred.concat(item)
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
      case 'starred':
        data = this.state.starred;
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
            onClick={this.handleCategoryClick}
          />
          <Button
            value={'tools'}
            name={'Tools'}
            style={{ border: '1px solid #e6004c', color: '#e6004c' }}
            onClick={this.handleCategoryClick}
          />
          <Button
            value={'challenges'}
            name={'Challenges'}
            style={{ border: '1px solid #1e8fd5', color: '#1e8fd5' }}
            onClick={this.handleCategoryClick}
          />
          <Button
            value={'starred'}
            name={'Your deck'}
            style={{ border: '1px solid green', color: 'green' }}
            onClick={this.handleCategoryClick}
          />
        </div>
        <Carousel
          paddingLeft={60}
          paddingRight={60}
          // responsive={responsive}
          // infinite={true}
          disableButtonsControls={true}
          disableDotsControls={true}
          onSlideChanged={this.onSlideChanged}
        >
          {data.map(item => {
            return (
              <div key={item.title}>
                <Card {...item} starClick={this.handleStarClick} />
              </div>
            );
          })}
        </Carousel>

        {data[this.state.cardIndex].type === 'persona' ? (
          <InfoPersona {...data[this.state.cardIndex]} />
        ) : data[this.state.cardIndex].type === 'challenge' ? (
          <InfoChallenge {...data[this.state.cardIndex]} />
        ) : data[this.state.cardIndex].type === 'tool' ? (
          <InfoTool {...data[this.state.cardIndex]} />
        ) : (
          <h2>Sorry mate</h2>
        )}
        <Footer />
      </div>
    );
  }
}

export default GameView;
