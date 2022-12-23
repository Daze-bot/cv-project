/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

class CVDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, experience, education } = this.props;

    return (
      <div className="CVDisplay">
        <Sidebar 
          info={info}
        />
        <Content
          info={info}
          experience={experience}
          education={education}
        />
      </div> 
    );
  }
}

export default CVDisplay;
