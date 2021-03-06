import React from 'react';
import Carousel from 'react-alice-carousel';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GameView.scss';

import cards from './../data/data-all.json';

import Card from './../components/Card';
import InfoPersona from '../components/InfoPersona';
import InfoChallenge from '../components/InfoChallenge';
import InfoTool from '../components/InfoTool';
import Footer from './../components/Footer';
import Button from './../components/Button';

import PersonasInactive from './../assets/icons/personas-inactive.png';
import PersonasActive from './../assets/icons/personas-active.png';
import ToolsInactive from './../assets/icons/tools-inactive.png';
import ToolsActive from './../assets/icons/tools-active.png';
import ChallengesInactive from './../assets/icons/challenges-inactive.png';
import ChallengesActive from './../assets/icons/challenges-active.png';
import DeckInactive from './../assets/icons/star.svg';
import DeckActive from './../assets/icons/star-full.svg';

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
      starred: [],
      zoomAnimate: true
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
      zoomAnimate: false,
      cardIndex: event.slide
    });
    this.setState({
      zoomAnimate: true
    });
  };

  render() {
    const cardsToShow = this.filteredCardsList;

    return (
      <div className="game">
        <div className="categories-bar">
          <Button
            icon={
              this.state.category === 'persona'
                ? PersonasActive
                : PersonasInactive
            }
            value={'persona'}
            name={'Persona'}
            style={
              this.state.category === 'persona'
                ? { color: '#eb5d3a' }
                : { color: 'white', fontFamily: 'Roboto Light' }
            }
            onClick={this.filterByCategory}
          />

          {/* <img src={ToolsInactive} alt="tools-icon" /> */}
          <Button
            icon={this.state.category === 'tool' ? ToolsActive : ToolsInactive}
            value={'tool'}
            name={'Tools'}
            style={
              this.state.category === 'tool'
                ? { color: '#ffa55e' }
                : { color: 'white', fontFamily: 'Roboto Light' }
            }
            onClick={this.filterByCategory}
          />

          <Button
            icon={
              this.state.category === 'challenge'
                ? ChallengesActive
                : ChallengesInactive
            }
            value={'challenge'}
            name={'Challenges'}
            style={
              this.state.category === 'challenge'
                ? { color: '#b4bff3' }
                : { color: 'white', fontFamily: 'Roboto Light' }
            }
            onClick={this.filterByCategory}
          />

          <Button
            icon={this.state.category === 'starred' ? DeckActive : DeckInactive}
            value={'starred'}
            name={'Your deck'}
            style={
              this.state.category === 'starred'
                ? { color: 'white' }
                : { fontFamily: 'Roboto Light' }
            }
            //style={{ border: '1px solid green', color: 'green' }}
            onClick={this.filterByCategory}
          />
        </div>
        {this.state.category === 'starred' && this.state.starred.length === 0 && (
          <div className="empty-state">
            <h4>Your deck looks still empty...</h4>
            <p>
              Save here the cards your team will play with and create your own
              deck.
            </p>
            <p>
              Tap on the star icon on the top right corner of a card to save it
              between your favourites here.
            </p>
          </div>
        )}
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

        <Fade when={this.state.zoomAnimate}>
          <InfoPersona {...cardsToShow[this.state.cardIndex]} />
          <InfoChallenge {...cardsToShow[this.state.cardIndex]} />
          <InfoTool {...cardsToShow[this.state.cardIndex]} />
        </Fade>

        <Footer />
      </div>
    );
  }
}

export default GameView;
