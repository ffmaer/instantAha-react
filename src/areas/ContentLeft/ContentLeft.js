import React, { Component } from "react";
import Word from "./Word";
import Icons from "./Icons";
import Visual from "./Visual";
import DefineButton from "./DefineButton";
import UploadButton from "./UploadButton";

class ContentLeft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tags = [];
    [Word,Icons,Visual,DefineButton,UploadButton].map((Area, i)=>{
      const name = Area.name;
      tags.push(
        React.createElement(
          "div",
          {
            style: { gridArea: name },
            key: i,
            id: name,
          },
          <Area />
        )
      );
    });
    return <>{tags}</>;
  }
}

export default ContentLeft;
