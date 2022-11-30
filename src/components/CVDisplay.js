/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class CVDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;

    return (
      <div className="CVDisplay">
        <p>{info.name}</p>
      </div> 
    );
  }
}

export default CVDisplay;
