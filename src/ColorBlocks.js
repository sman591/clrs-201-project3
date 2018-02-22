import React, { Component } from 'react';
import ColorBlock from './ColorBlock.js';

const mix = function(start, end, Q) {
  return start.map((startValue, index) => {
    const endValue = end[index];

    // Mix two colors
    const newValue = endValue * Q;

    // Round to an integer & constrain within [0, 255]
    return Math.min(Math.max(Math.round(newValue), 0), 255);
  });
};

class ColorBlocks extends Component {
  state = {
    Q: [0.1, 0.4, 0.10, 0.5, 0.9]
  };

  updateQ(index, delta) {
    const copyOfQ = [...this.state.Q];
    copyOfQ[index] = copyOfQ[index] + delta;
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
