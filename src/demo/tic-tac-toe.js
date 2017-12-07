import React from 'react';
import { Game } from './game';

class TicTacToe extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Game />
      </div>
    );
  }
}

export { TicTacToe };