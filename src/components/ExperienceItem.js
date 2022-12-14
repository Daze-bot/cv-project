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
      id,
      index
    } = this.props;

    return (
      <form className="experienceForm">
        <p>Experience {index + 1}</p>
        <label htmlFor="expCompany">Company</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.company}
          type="text"
          name="company"
          id="expCompany"
        />
        <label htmlFor="expLocation">Location</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.location}
          type="text"
          name="location"
          id="expLocation"
        />
        <label htmlFor="expTitle">Title</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.title}
          type="text"
          name="title"
          id="expTitle"
        />
        <label htmlFor="expStart">Start Date</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.start}
          type="text"
          name="start"
          id="expStart"
        />
        <label htmlFor="expEnd">End Date</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.end}
          type="text"
          name="end"
          id="expEnd"
        />
        <label htmlFor="expDescription">Description</label>
        <textarea
          className="entry"
          onChange={(e) => changeExperience(e, id)}
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
