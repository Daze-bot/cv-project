/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="headerContent">
          <h1>Resume Builder</h1>
        </div>
      </header>
    );
  }
}

export default Header;
