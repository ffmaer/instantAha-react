import React, { Component } from "react";
import Metadata from './ContentRight/Metadata';
import Morphology from './ContentRight/Morphology';
import WorldLanguages from './ContentRight/WorldLanguages';
import ShowHistory from './ContentRight/ShowHistory';

class ContentRight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>
    <Metadata/>
    <Morphology/>
    <WorldLanguages/>
    <ShowHistory/>
    </>;
  }
}

export default ContentRight;
