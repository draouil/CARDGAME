import React, { Component } from 'react';
import '../css/cards.css';
import Card from './Card';

class Cards extends Component {
  state = {
    showCards: [],
    cards: this.getInitialCards(),
  };
  getInitialCards() {
    let cards;
    for (var i = 1; i <= 52; i++) {
      cards.push(i);
    }
    return cards;
  }

  handelshowcard(id) {
    var { showCards } = this.state;
    //cards = cards.filter(item => item != id);

    //shift from cards

    let show = show.push({ id });

    // First in show cards

    this.setState({ show });

    return show;
  }

  render() {
    let { show, cards } = this.state;
    let { id } = this.props;
    cards = this.handelGetCard(id);
    show = this.handelshowcard(id);

    return (
      <div className="container">
        <div onClick={e => this.handelshowcard(e)}> get cards</div>
        {show && show.map(item => <Card id={item} key={item} />)}
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
