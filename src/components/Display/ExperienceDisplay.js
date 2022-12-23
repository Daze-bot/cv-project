/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ExperienceDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experience } = this.props;

    return (
      <div className="expDisplayItem">
        <div className="expDisplayLeft">
          <p className="expCompany">{experience.company}</p>
          <p className="expLocation">{experience.location}</p>
          <div className="expDisplayDates">
            {experience.start} - {experience.end}
          </div>
        </div>
        <div className="expDisplayRight">
          <p className="expTitle">{experience.title}</p>
          <p className="expDescription">{experience.description}</p>
        </div>
      </div>
    );
  }
}

export default ExperienceDisplay;
