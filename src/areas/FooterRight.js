import React, { Component } from "react";

class FooterRight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let links = [
      { href: "/about", text: "About" },
      { href: "/terms", text: "Terms" },
      { href: "/feedback", text: "Feedback" },
      { href: "/chrome-extension", text: "Chrome extension" },
      { href: "/privacy-policy", text: "Privacy policy" },
      { href: "/sign-up-newsletter", text: "Newsletter" },
    ];
    return (
      <>
        {links.map((x, i) => (
          <div key={i}>
            <a href={x.href}>{x.text}</a>
          </div>
        ))}
      </>
    );
  }
}

export default FooterRight;
