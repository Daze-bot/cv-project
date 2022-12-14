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

    let experienceItems = experience.map((item, index) => (
      <ExperienceItem
        index={index}
        key={item.id}
        id={item.id}
        experience={item}
        changeExperience={changeExperience} 
      />
    ));

    return (
      <div className="experienceHistory">
        <p>Experience</p>
        {experienceItems}
      </div>
    );
  }
}

export default Experience;
