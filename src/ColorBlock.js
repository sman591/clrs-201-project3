import React, { Component } from 'react';
import './ColorBlock.css';

class ColorBlocks extends Component {
  render() {
    const style = {
      background: `rgb(${this.props.color.join(',')})`,
    };

    return (
      <div>
        <div className="ColorBlock" style={style} />
        {this.props.onChange && (
          <div className="ColorBlock--controls">
            <button onClick={() => this.props.onChange(-0.1)}>-</button>
            <button onClick={() => this.props.onChange(0.1)}>+</button>
          </div>
        )}
      </div>
    );
  }
}

export default ColorBlocks;
