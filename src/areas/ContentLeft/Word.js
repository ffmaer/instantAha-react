import React, { Component } from "react";

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = { word: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    fetch("//localhost:8124/api/word").then((res)=>res.json()).then(
      (result) => {
        this.setState({ word: result.word });
      },
      (error) => {}
    );
  }

  handleChange(event) {
    this.setState({ word: event.target.value });
  }

  render() {
    return <input value={this.state.word} onChange={this.handleChange} />;
  }
}

export default Word;
