import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped : false,

    };
  }

  render() {
    return (
      <div className="card bg-dark text-white border-warning border-3">
          <img className="card-img" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.name+"_0.jpg" }/>
          <p className="card-text">{this.props.name}</p>
      </div>
    );
  }
}

export default Card;
