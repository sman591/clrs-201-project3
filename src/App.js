import React, { Component } from 'react';
import ColorBlocks from './ColorBlocks.js';

const SCALES = [
  {
    start: [0, 0, 0],
    end: [255, 255, 255],
  },
  {
    start: [0, 0, 0],
    end: [0, 255, 0],
  },
  {
    start: [129, 129, 129],
    end: [255, 0, 0],
  },
  {
    start: [0, 0, 255],
    end: [255, 255, 0],
  }
];

class App extends Component {
  state = {
    displayValues: false,
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Click +/i to adjust colors below.<br />
          <button onClick={() => this.setState({ displayValues: !this.state.displayValues })}>Toggle value display</button>
        </p>
        {SCALES.map((scale, index) => <ColorBlocks key={index} {...scale} displayValues={this.state.displayValues} />)}
      </div>
    );
  }
}

export default App;
