import React from 'react';

class InputLogger extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('event happens');
    const value = e.target.value;
    if (value.length < 5) {
      this.setState({ value: value });
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          type="text"
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default InputLogger;
