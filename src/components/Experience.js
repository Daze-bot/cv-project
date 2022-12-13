/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      experience,
      changeExperience,
    } = this.props;

    return (
      <div className="experienceHistory">
        <p>Experience</p>
          <ExperienceItem />
      </div>
    );
  }
}

export default Experience;
