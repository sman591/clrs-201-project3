import React, { Component } from 'react';
import ColorBlock from './ColorBlock.js';

const mix = function(start, end, Q) {
  return start.map((startValue, index) => {
    const endValue = end[index];

    // Mix two colors
    const newValue = (endValue * Q) + (startValue * (1 - Q));

    // Round to an integer & constrain within [0, 255]
    return Math.min(Math.max(Math.round(newValue), 0), 255);
  });
};

class ColorBlocks extends Component {
  state = {
    Q: [0.1, 0.2, 0.3, 0.4, 0.9]
  };

  updateQ(index, delta) {
    const copyOfQ = [...this.state.Q];
    let newQ = copyOfQ[index] + delta;
    // Constrain within [0, 1]
    newQ = Math.min(Math.max(newQ, 0), 1);
    copyOfQ[index] = newQ;
    this.setState({
      Q: copyOfQ
    });
  }

  render() {
    return (
      <div className="ColorBlocks">
        <ColorBlock color={this.props.start} />
        {this.state.Q.map((Q, index) => (
          <ColorBlock
            key={index}
            color={mix(this.props.start, this.props.end, Q)}
            onChange={(delta) => this.updateQ(index, delta)}
          />
        ))}
        <ColorBlock color={this.props.end} />
      </div>
    );
  }
}

export default ColorBlocks;
