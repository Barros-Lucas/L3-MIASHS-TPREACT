import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "Tresh",
      url : "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
      isFlipped : false


    };
  }

  render() {
    return (
      <div className="card bg-dark text-white border-warning border-3">
          <img className="card-img" src={this.state.url}/>
          <p className="card-text">{this.state.name}</p>
      </div>
    );
  }
}

export default Card;
