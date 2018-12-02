import React, { Component } from 'react';
import './Board.css';
import Card from './Card';
import champ from "./Champions.json";


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab : []


    };
  }

  getChampions(){
    var random = 1;
    for(let id in champ.data.id){
      console.log(id)
      console.log(random)
    }
}
    // fetch("champions.json")
    //     .then(response => response.json())
    //     .then(response => {
    //       this.champion = Object.keys(response.data);
    //
    //         let randIndex = 1;
    //         this.randChamp.push({
    //           name: this.champion[randIndex],
    //           src: this.champion[randIndex] + "_0.jpg",
    //           flip:false
    //         });
    //       });
    //       return this.randChamp[0];

coucou(){
  return <Card></Card>
}
  render() {


    return (

      <section className="card-columns ">
      {this.getChampions()}
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>


      </section>
    );
  }
}

export default Board;
