/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import EducationDisplay from "./EducationDisplay";
import ExperienceDisplay from "./ExperienceDisplay";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, experience, education } = this.props;

    const experienceItems = experience.map((exp) => (
      <ExperienceDisplay
        key={exp.id}
        experience={exp}
      />
    ));

    const educationItems = education.map((edu) => (
      <EducationDisplay
        key={edu.id}
        education={edu}
      />
    ));

    return (
      <div className="displayContent">
        <div className="contentName">
          {info.name}
        </div>
        <hr></hr>
        <div className="experienceDisplay">
          <h1>EXPERIENCE</h1>
          {experienceItems}
        </div>
        <hr></hr>
        <div className="educationDisplay">
          <h1>EDUCATION</h1>
          {educationItems}
        </div>
      </div> 
    );
  }
}

export default Content;
