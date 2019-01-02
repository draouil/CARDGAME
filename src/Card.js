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
    let { id } = this.state;
    id = id + 1;
    e.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped,
      visible: true,
    }));
    this.setState({ id });
  };

  render() {
    const { id } = this.state;
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
