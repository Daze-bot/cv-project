/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Experience from "./Experience";
import Info from "./Info";

class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      info,
      changeInfo,
      experience,
      changeExperience,
    } = this.props;

    return (
      <div className="CVForm">
        <Info
          info={info}
          changeInfo={changeInfo}
        />
        <Experience
          experience={experience}
          changeExperience={changeExperience}
        />
      </div> 
    );
  }
}

export default CVForm;
