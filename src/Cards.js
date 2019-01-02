import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  state = {
    showCards: [],
    cards: this.getInitialCards(),
  };
  getInitialCards() {
    let cards = [];
    for (var i = 1; i <= 52; i++) {
      console.log(i);
      cards[i] = i;
    }
    return cards;
  }

  handelshowcard(e) {
    var { showCards, cards } = this.state;

    // extract first element from cards
    var firstElement = cards.shift();
    console.log('firstElement', firstElement);
    console.log('showCard', showCards);

    showCards.push({ firstElement });
    console.log('showCard2', showCards);

    // add first element in show table show cards

    return showCards;
  }

  render() {
    // let { showCards } = this.state;
    let showCards = this.handelshowcard();

    return (
      <div className="container">
        <div onClick={e => this.handelshowcard(e)}> get cards</div>
        {showCards && showCards.map(item => <Card id={item} key={item} />)}
      </div>
    );
  }
}
/*

//redux configuration:
const mapStateToProps = state => {
  return {
    Cards: state.CardReducer.Cards,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleClick(card) {
      dispatch(handleClick(card));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards); */
export default Cards;
