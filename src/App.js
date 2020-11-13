import React, { Component } from "react";
import "./scss/App.scss";
import HeaderLeft from "./areas/HeaderLeft/HeaderLeft";
import HeaderRight from "./areas/HeaderRight";
import ContentLeft from "./areas/ContentLeft/ContentLeft";
import Navigation from "./areas/Navigation";
import ContentRight from "./areas/ContentRight";
import Chrome from "./areas/Chrome";
import FooterLeft from "./areas/FooterLeft";
import FooterRight from "./areas/FooterRight";

class App extends Component {
  render() {
    let areas = [
      HeaderLeft,
      HeaderRight,
      ContentLeft,
      Navigation,
      ContentRight,
      Chrome,
      FooterLeft,
      FooterRight,
    ];
    let tags = [];
    for (let Area of areas) {
      const name = Area.name;
      tags.push(
        React.createElement(
          "div",
          {
            style: { gridArea: name },
            key: name,
            id: name,
          },
          <Area />
        )
      );
    }
    return <div id="grid">{tags}</div>;
  }
}

export default App;
