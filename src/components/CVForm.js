/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Info from "./Info";

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
        <Info
          info={info}
          changeInfo={changeInfo}
        />
      </div> 
    );
  }
}

export default CVForm;
