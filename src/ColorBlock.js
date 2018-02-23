import React, { Component } from 'react';

const DELTA_SIZE = 0.05;

class ColorBlocks extends Component {
  value() {
    return this.props.color.reduce((sum, item) => sum + item, 0);
  }

  render() {
    const style = {
      background: `rgb(${this.props.color.join(',')})`,
    };

    return (
      <div>
        <div className="ColorBlock" style={style} />
        <div className="ColorBlock--value">
          {this.props.displayValues && this.value()}
        </div>
        {this.props.onChange && (
          <div className="ColorBlock--controls">
            <button onClick={() => this.props.onChange(-1 * DELTA_SIZE)}>-</button>
            <button onClick={() => this.props.onChange(DELTA_SIZE)}>+</button>
          </div>
        )}
      </div>
    );
  }
}

export default ColorBlocks;
