import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:this.props.name,
      nameFlip: "Clique",
      isFlipped : false,


    };
  }

  onClick = () => {
     this.setState({
          name:this.state.name,
           nameFlip: "Clique",
           isFlipped : !this.state.isFlipped});

  }

  render() {
    if(this.state.isFlipped){
      return (
        <div className="card bg-dark text-white border-warning border-3" onClick={this.onClick}>
            <img className="card-img" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.state.name+"_0.jpg"}/>
            <p className="card-text">{this.state.name}</p>
        </div>
      );
    }else{
      return (
        <div className="card bg-dark text-white border-warning border-3" onClick={this.onClick}>
            <img className="card-img" src={'./card_back.jpg'}/>
            <p className="card-text">{this.state.nameFlip}</p>
        </div>
      );
    }

  }
}

export default Card;
