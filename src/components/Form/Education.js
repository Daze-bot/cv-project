/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import EducationItem from "./EducationItem";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      education,
      changeEducation,
      addEducation,
      deleteEducation,
    } = this.props;

    let educationItems = education.map((item, index) => (
      <EducationItem
        index={index}
        key={item.id}
        id={item.id}
        education={item}
        changeEducation={changeEducation}
        deleteEducation={deleteEducation}
      />
    ));

    return (
      <div className="educationHistory">
        <p>Education</p>
        {educationItems}
        <div className="btnContainer">
          <button className="addEduBtn" onClick={addEducation}>Add Education</button>
        </div>
      </div>
    );
  }
}

export default Education;
