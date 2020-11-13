import React, { Component } from "react";
import Search from "./Search";

class HeaderLeft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <img src="/logo.png" />
        <Search />
      </>
    );
  }
}

export default HeaderLeft;
