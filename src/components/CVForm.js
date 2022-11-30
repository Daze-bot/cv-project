/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      info,
      changeInfo,
    } = this.props;

    return (
      <div className="CVForm">
        <form className="info">
          <label htmlFor="infoName">Name</label>
          <input
            onChange={changeInfo}
            value={info.name}
            type="text"
            name="name"
            id="infoName"
          />
        </form>
      </div> 
    );
  }
}

export default CVForm;
