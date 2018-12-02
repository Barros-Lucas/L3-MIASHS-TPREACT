import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="bg-dark">
            <nav className="navbar bg-dark">
                <span className="navbar-brand text-secondary">LOL MEMO</span>
            </nav>
        </header>
        
        <Board />


      </div>
    );
  }
}

export default App;
