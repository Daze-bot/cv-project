/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Delete from '../../imgs/delete.svg';

class EducationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      education,
      changeEducation,
      deleteEducation,
      id,
      index
    } = this.props;

    return (
      <form className="educationForm">
        <p>Education {index + 1}</p>
        <img 
          className="deleteBtn" 
          src={Delete} alt="Remove Education"
          onClick={() => deleteEducation(id)} 
        >
        </img>
        <label htmlFor={`eduSchool${index}`}>School</label>
        <input
          className="entry"
          onChange={(e) => changeEducation(e, id)}
          value={education.school}
          type="text"
          name="school"
          id={`eduSchool${index}`}
        />
        <label htmlFor={`eduLocation${index}`}>Location</label>
        <input
          className="entry"
          onChange={(e) => changeEducation(e, id)}
          value={education.location}
          type="text"
          name="location"
          id={`eduLocation${index}`}
        />
        <label htmlFor={`eduDegree${index}`}>Degree</label>
        <input
          className="entry"
          onChange={(e) => changeEducation(e, id)}
          value={education.degree}
          type="text"
          name="degree"
          id={`eduDegree${index}`}
        />
        <label htmlFor={`eduStart${index}`}>Start Date</label>
        <input
          className="entry"
          onChange={(e) => changeEducation(e, id)}
          value={education.start}
          type="text"
          name="start"
          id={`eduStart${index}`}
        />
        <label htmlFor={`eduEnd${index}`}>End Date</label>
        <input
          className="entry"
          onChange={(e) => changeEducation(e, id)}
          value={education.end}
          type="text"
          name="end"
          id={`eduEnd${index}`}
        />
      </form>
    );
  }
}

export default EducationItem;
