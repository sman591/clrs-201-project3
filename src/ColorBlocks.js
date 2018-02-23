import React, { Component } from 'react';
import ColorBlock from './ColorBlock.js';

const mix = function(start, end, ratio) {
  return start.map((startValue, index) => {
    const endValue = end[index];

    // Mix two colors
    const newValue = Math.sqrt(
      (Math.pow(endValue, 2) * ratio) + (Math.pow(startValue, 2) * (1 - ratio))
    );

    // Round to an integer & constrain within [0, 255]
    return Math.min(Math.max(Math.round(newValue), 0), 255);
  });
};

class ColorBlocks extends Component {
  state = {
    ratios: [0.1, 0.1, 0.1, 0.1, 0.1]
  };

  updateRatio(index, delta) {
    const ratiosCopy = [...this.state.ratios];
    let newRatio = ratiosCopy[index] + delta;
    // Constrain within [0, 1]
    newRatio = Math.min(Math.max(newRatio, 0), 1);
    ratiosCopy[index] = newRatio;
    this.setState({
      ratios: ratiosCopy
    });
  }

  render() {
    return (
      <div className="ColorBlocks">
        <ColorBlock color={this.props.start} displayValues={this.props.displayValues} />
        {this.state.ratios.map((ratio, index) => (
          <ColorBlock
            key={index}
            color={mix(this.props.start, this.props.end, ratio)}
            onChange={(delta) => this.updateRatio(index, delta)}
            displayValues={this.props.displayValues}
          />
        ))}
        <ColorBlock color={this.props.end} displayValues={this.props.displayValues} />
      </div>
    );
  }
}

export default ColorBlocks;
