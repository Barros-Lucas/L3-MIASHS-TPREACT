import React, { Component } from 'react';
import './Board.css';
import Card from './Card';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab : [],
      cartes : []


    };
  }

  getChampions(){
    fetch('./Champions.json')
    .then(response => response.json())
    .then(response =>{
        for(let champion in response.data){
          console.log(response.data[champion].id)
        }
    });
}

// makeBoard(){
//   const champions = this.state.tab;
//   for(let index=0;index<3;++index ){
//     console.log(champions[index]);
//     this.state.setState(this.cartes.push(<Card name={champions[index].name} ></Card>));
//   }
// return this.state.cartes
// }
makeBoard(){
  const nb = 6;

    this.state.cartes.push(<Card name='Aatrox' ></Card>);
    this.state.cartes.push(<Card name='Ahri' ></Card>);
    this.state.cartes.push(<Card name='Akali' ></Card>);
    this.state.cartes.push(<Card name='Aatrox' ></Card>);
    this.state.cartes.push(<Card name='Ahri' ></Card>);
    this.state.cartes.push(<Card name='Akali' ></Card>);

return this.state.cartes
}
  render() {


    return (

      <section className="card-columns ">
      {this.getChampions()}

      {this.makeBoard()}



      </section>
    );
  }
}

export default Board;
