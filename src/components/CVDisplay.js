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
        {/* Replace all of this once Input Forms are done.  Used for testing inputs */}
        <p>{info.name}</p>
        <p>{info.address}</p>
        <p>{info.city}, {info.state} {info.zip}</p>
        <p>{info.phone}</p>
        <p>{info.email}</p>
        <p>{info.website}</p>
        <p>{info.description}</p>
        {/* NEED TO FIX - Custom IMG is not loading in display */}
        <img src={info.avatar} alt="Avatar"></img>
      </div> 
    );
  }
}

export default CVDisplay;
