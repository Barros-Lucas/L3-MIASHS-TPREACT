import React, { Component } from 'react';
import './Board.css';
import Card from './Card';
import champ from "./Champions.json";


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab : [],
      cartes : []


    };
  }

  getChampions(){
    var random = 1;
    //met dans le tab 3 noms au hazard, fixer pour le moment
    this.state.tab = [
    {id:266, name: 'Aatrox'},
    {id:103,name: 'Ahri'},
    {id:86,name: 'Akali'}
];
}

makeBoard(){
  const champions = this.state.tab.name[0];
  for(var champion in champions){
    console.log(champion)
    this.state.cartes.push(<Card name={champion} ></Card>);
  }
return this.state.cartes
}
  render() {


    return (

      <section className="card-columns ">
      {this.getChampions()}
      {console.log(this.state.tab)}
      {this.makeBoard()}



      </section>
    );
  }
}

export default Board;
