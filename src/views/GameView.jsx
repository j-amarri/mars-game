import React from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GameView.scss';

import cards from './../data/data-all.json';

import Card from './../components/Card';
import InfoPersona from '../components/InfoPersona';
import InfoChallenge from '../components/InfoChallenge';
import InfoTool from '../components/InfoTool';
import Footer from './../components/Footer';
import Button from './../components/Button';

import PersonasInactive from './../assets/icons/personas-inactive.svg';
import ToolsInactive from './../assets/icons/tools-inactive.svg';
import ChallengesInactive from './../assets/icons/challenges-inactive.svg';
import DeckInactive from './../assets/icons/deck-inactive.svg';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 }
};

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      category: 'persona',
      cardIndex: 0,
      allCards: cards,
      starred: []
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });
  }

  filterByCategory = event => {
    const category = event.currentTarget.value;
    this.setState({
      category
    });
  };

  get filteredCardsList() {
    const category = this.state.category;
    return category === 'starred'
      ? this.state.starred
      : this.state.allCards.filter(card => card.type === category);
  }

  // to review
  handleStarClick = item => {
    // get main deck copy
    const cardDeck = this.state.allCards.slice();
    // get card from main deck
    let card = cardDeck.find(elem => {
      return elem.title === item.title;
    });
    // check if card is already in starred list
    const index = this.state.starred.indexOf(card);
    card.starred = index === -1; // if item is not on starred, make it starred

    let items;
    if (card.starred) {
      items = [...this.state.starred.concat(card)];
    } else {
      items = this.state.starred.slice(); //copy starred array
      items.splice(index, 1); // remove item from array
    }

    this.setState({
      starred: items,
      allCards: cardDeck
    });
  };

  onSlideChanged = event => {
    this.setState({
      cardIndex: event.slide
    });
    console.log('cardIndexUpdated', this.state.cardIndex);
  };

  render() {
    const cardsToShow = this.filteredCardsList;

    return (
      <div className="game">
        <div className="categories-bar">
          <Button
            icon={PersonasInactive}
            value={'persona'}
            name={'Persona'}
            onClick={this.filterByCategory}
          />

          {/* <img src={ToolsInactive} alt="tools-icon" /> */}
          <Button
            icon={ToolsInactive}
            value={'tool'}
            name={'Tools'}
            //style={{ border: '1px solid #e6004c', color: '#e6004c' }}
            onClick={this.filterByCategory}
          />

          <Button
            icon={ChallengesInactive}
            value={'challenge'}
            name={'Challenges'}
            //style={{ border: '1px solid #1e8fd5', color: '#1e8fd5' }}
            onClick={this.filterByCategory}
          />

          <Button
            icon={DeckInactive}
            value={'starred'}
            name={'Your deck'}
            //style={{ border: '1px solid green', color: 'green' }}
            onClick={this.filterByCategory}
          />
        </div>
        <Carousel
          paddingLeft={60}
          paddingRight={60}
          responsive={responsive}
          disableButtonsControls={true}
          disableDotsControls={true}
          onSlideChanged={this.onSlideChanged}
        >
          {cardsToShow.map(item => {
            return (
              <div key={item.title}>
                <Card {...item} starClick={this.handleStarClick} />
              </div>
            );
          })}
        </Carousel>

        <InfoPersona {...cardsToShow[this.state.cardIndex]} />
        <InfoChallenge {...cardsToShow[this.state.cardIndex]} />
        <InfoTool {...cardsToShow[this.state.cardIndex]} />
        <Footer />
      </div>
    );
  }
}

export default GameView;
