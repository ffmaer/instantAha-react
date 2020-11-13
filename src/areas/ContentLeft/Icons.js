import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar,faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faBookMarkRegular } from '@fortawesome/free-regular-svg-icons'

class Icons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FontAwesomeIcon icon={faChartBar} />
        <FontAwesomeIcon icon={faBookMarkRegular} />
        <FontAwesomeIcon icon={faHeart} />
      </>
    );
  }
}

export default Icons;
