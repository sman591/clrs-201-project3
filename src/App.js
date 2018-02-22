import React, { Component } from 'react';
import ColorBlocks from './ColorBlocks.js';
import './App.css';

const SCALES = [
  {
    start: [0, 0, 0],
    end: [255, 255, 255],
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Click +/i to adjust colors below
        </p>
        {SCALES.map((scale, index) => <ColorBlocks key={index} {...scale} />)}
      </div>
    );
  }
}

export default App;
