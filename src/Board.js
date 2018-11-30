import React, { Component } from 'react';
import './Board.css';
import Card from './Card';


class Board extends Component {
  render() {
    return (
      <section class="card-columns ">
          <Card/>
      </section>
    );
  }
}

export default Board;
