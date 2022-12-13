/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      experience,
      changeExperience,
    } = this.props;

    return (
      <form className="experienceForm">
        <label htmlFor="expCompany">Company</label>
        <input
          className="entry"
          onChange={changeExperience}
          value={experience.name}
          type="text"
          name="company"
          id="expCompany"
        />
        <label htmlFor="expLocation">Location</label>
        <input
          className="entry"
          onChange={changeExperience}
          value={experience.address}
          type="text"
          name="location"
          id="expLocation"
        />
        <label htmlFor="expTitle">Title</label>
        <input
          className="entry"
          onChange={changeExperience}
          value={experience.city}
          type="text"
          name="title"
          id="expTitle"
        />
        <label htmlFor="expStart">Start Date</label>
        <input
          className="entry"
          onChange={changeExperience}
          value={experience.state}
          type="text"
          name="start"
          id="expStart"
        />
        <label htmlFor="expEnd">End Date</label>
        <input
          className="entry"
          onChange={changeExperience}
          value={experience.zip}
          type="text"
          name="end"
          id="expEnd"
        />
        <label htmlFor="expDescription">Description</label>
        <textarea
          className="entry"
          onChange={changeExperience}
          value={experience.description}
          type="text"
          name="description"
          id="expDescription"
          rows={4}
        />
      </form>
    );
  }
}

export default ExperienceItem;
