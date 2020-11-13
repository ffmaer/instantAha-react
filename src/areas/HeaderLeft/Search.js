import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      fetch("//localhost:8124/api/search")
        .then((res) => res.json())
        .then((res) => {
          console.log(res[0]);
        });
    }
  }

  render() {
    let style = {
      height: "30px",
    };
    return <input style={style} type="text" onKeyDown={this.handleKeyDown} />;
  }
}

export default Search;
