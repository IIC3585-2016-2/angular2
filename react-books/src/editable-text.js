import React, { Component } from 'react';

export default class EditableText extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.defaultText,
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <h3>{text}</h3>
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
        />
      </div>
    )
  }

}
