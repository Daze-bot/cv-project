/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Delete from '../imgs/delete.svg';

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      experience,
      changeExperience,
      deleteExperience,
      id,
      index
    } = this.props;

    return (
      <form className="experienceForm">
        <p>Experience {index + 1}</p>
        <img 
          className="deleteBtn" 
          src={Delete} alt="Remove Experience"
          onClick={() => deleteExperience(id)} 
        >
        </img>
        <label htmlFor={`expCompany${index}`}>Company</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.company}
          type="text"
          name="company"
          id={`expCompany${index}`}
        />
        <label htmlFor={`expLocation${index}`}>Location</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.location}
          type="text"
          name="location"
          id={`expLocation${index}`}
        />
        <label htmlFor={`expTitle${index}`}>Title</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.title}
          type="text"
          name="title"
          id={`expTitle${index}`}
        />
        <label htmlFor={`expStart${index}`}>Start Date</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.start}
          type="text"
          name="start"
          id={`expStart${index}`}
        />
        <label htmlFor={`expEnd${index}`}>End Date</label>
        <input
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.end}
          type="text"
          name="end"
          id={`expEnd${index}`}
        />
        <label htmlFor={`expDescription${index}`}>Description</label>
        <textarea
          className="entry"
          onChange={(e) => changeExperience(e, id)}
          value={experience.description}
          type="text"
          name="description"
          id={`expDescription${index}`}
          rows={4}
        />
      </form>
    );
  }
}

export default ExperienceItem;
