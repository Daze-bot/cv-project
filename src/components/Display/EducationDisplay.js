/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class EducationDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { education } = this.props;

    return (
      <div className="eduDisplayItem">
        <div className="eduDisplayLeft">
          <p className="eduSchool">{education.school}</p>
          <p className="eduLocation">{education.location}</p>
          <div className="eduDisplayDates">
            {education.start} - {education.end}
          </div>
        </div>
        <div className="eduDisplayRight">
          <p className="eduDegree">{education.degree}</p>
        </div>
      </div>
    );
  }
}

export default EducationDisplay;
