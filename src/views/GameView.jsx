import React from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GameView.scss';

import dataAll from './../data/data-all.json';

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
    this.state = {
      loaded: false,
      cards: [],
      category: 'persona',
      cardIndex: 0,
      starred: []
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true,
      cards: dataAll
      // cardActive: dataAll[0]
    });
  }

  filterByCategory = event => {
    const category = event.target.value;
    this.setState({
      category
    });
  };

  get filteredCardsList() {
    const category = this.state.category;
    return this.state.cards.filter(card => card.type === category);
  }

  // to review
  // handleStarClick = item => {
  //   let items = [...this.state.starred.concat(item)];
  //   console.log(item);
  //   //let itemToChange = { ...items[1] };
  //   //console.log(itemToChange);
  //   //itemToChange.starred = true;
  //   //items[item.slide] = itemToChange;
  //   this.setState({
  //     //starred: this.state.starred.concat(item)
  //     starred: items
  //   });
  // };
  ///

  onSlideChanged = event => {
    console.log(event);
    this.setState({
      cardIndex: event.slide
      // cardActive: event
    });
  };

  render() {
    const cardsToShow = this.filteredCardsList;

    return (
      <div className="game">
        <div className="categories-bar">
          <Button
            value={'persona'}
            name={'Persona'}
            style={{ border: '1px solid yellow', color: 'yellow' }}
            onClick={this.filterByCategory}
          />
          <Button
            value={'tool'}
            name={'Tools'}
            style={{ border: '1px solid #e6004c', color: '#e6004c' }}
            onClick={this.filterByCategory}
          />
          <Button
            value={'challenge'}
            name={'Challenges'}
            style={{ border: '1px solid #1e8fd5', color: '#1e8fd5' }}
            onClick={this.filterByCategory}
          />
          <Button
            value={'starred'}
            name={'Your deck'}
            style={{ border: '1px solid green', color: 'green' }}
            // onClick={this.filterByCategory}
          />
        </div>
        <Carousel
          paddingLeft={60}
          paddingRight={60}
          activeIndex={0}
          slideToIndex={this.state.cardIndex}
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

        <InfoPersona {...this.state.cardActive} />

        {/* {cardsToShow.map(item => {
          if (item.type === 'persona') {
            return <InfoPersona {...item} />;
          } else if (item.type === 'challenge') {
            return <InfoChallenge {...item} />;
          } else {
            return <InfoTool {...item} />;
          }
        })} */}

        {/* {cardsToShow[this.state.cardIndex].type === 'persona' ? (
          <InfoPersona {...cardsToShow[this.state.cardIndex]} />
        ) : cardsToShow[this.state.cardIndex].type === 'challenge' ? (
          <InfoChallenge {...cardsToShow[this.state.cardIndex]} />
        ) : cardsToShow[this.state.cardIndex].type === 'tool' ? (
          <InfoTool {...cardsToShow[this.state.cardIndex]} />
        ) : (
          <h2>Sorry mate</h2>
        )} */}

        <Footer />
      </div>
    );
  }
}

export default GameView;
