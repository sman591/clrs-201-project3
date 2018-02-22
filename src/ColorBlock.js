import React, { Component } from 'react';

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
          {this.value()}
        </div>
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
