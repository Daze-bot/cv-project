/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Experience from "./Experience";
import Education from "./Education";
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
      deleteExperience,
      education,
      changeEducation,
      addEducation,
      deleteEducation,
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
        <Education
          education={education}
          changeEducation={changeEducation}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
      </div> 
    );
  }
}

export default CVForm;
