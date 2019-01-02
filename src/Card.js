import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      id: 0,
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped,
      visible: true,
    }));
  };

  render() {
    const { id } = this.props;
    return (
      <div>
        <ReactCardFlip
          isFlipped={this.props.isFlipped}
          flipSpeedBackToFront={1}
          flipSpeedFrontToBack={1}
        >
          <button
            background={`card-${id}`}
            onClick={e => this.handleClick(e)}
            key="front"
            id={id}
          />
          <button
            background={`card-${id}`}
            onClick={e => this.handleClick(e)}
            key="back"
            id={id}
          />
        </ReactCardFlip>
      </div>
    );
  }
}
export default Card;
