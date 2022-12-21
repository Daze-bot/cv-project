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
      addExperience,
      deleteExperience
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
          addExperience={addExperience}
          deleteExperience={deleteExperience}
        />
      </div> 
    );
  }
}

export default CVForm;
