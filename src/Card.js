import React, { Component } from 'react';
import './Card.css';


class Card extends Component {


  render() {
    return (
      <div className="card bg-dark text-white border-warning border-3">
          <img className="card-img" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg"/>
          <p className="card-text">Thresh.</p>
      </div>
    );
  }
}

export default Card;
