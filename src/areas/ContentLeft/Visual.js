import React, { Component } from "react";

class Visual extends Component {
  constructor(props) {
    super(props);
    this.state = { src: "" };
  }

  callAPI() {
    fetch("//localhost:8124/api/image")
      .then((res) => res.json())
      .then((res) => this.setState({ src: res.src }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return <img src={this.state.src}/>;
  }
}

export default Visual;
