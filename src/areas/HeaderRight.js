import React, { Component } from "react";

class HeaderRight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <button>Reveal</button>
        </div>
        <div id="sign_in_buttons">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </>
    );
  }
}

export default HeaderRight;
