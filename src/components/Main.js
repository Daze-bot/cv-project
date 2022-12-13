/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import CVForm from "./CVForm";
import CVDisplay from "./CVDisplay";
import Stock from '../imgs/stock-avatar.svg';
import uniqid from "uniqid";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        website: '',
        description: '',
        avatar: Stock,
      },
      experience: [
        {
          id: uniqid(),
          name: '',
          location: '',
          title: '',
          start: '',
          end: '',
          description: '',
        },
      ],
      experienceItem: {
        id: uniqid(),
        name: '',
        location: '',
        title: '',
        start: '',
        end: '',
        description: '',
      },
      education: [
        {
          id: uniqid(),
          name: '',
          location: '',
          degree: '',
          start: '',
          end: '',
        }
      ],
      educationItem: {
        id: uniqid(),
        name: '',
        location: '',
        degree: '',
        start: '',
        end: '',
      },
    }

    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handleInfoChange(e) {
    this.setState((state) => ({
      info: {
        ...state.info,
        [e.target.name]: e.target.value,
      }
    }));

    console.log(this.state);
  }

  handleExperienceChange(e, id) {
    this.setState((state) => ({
      experience: {
        ...state.experience,
        [e.target.name]: e.target.value,
      }
    }));
  }

  render() {
    const { info } = this.state;

    return (
      <main>
        <CVForm 
          info={info}
          changeInfo={this.handleInfoChange}       
        />
        <CVDisplay 
          info={info}
        />
      </main> 
    );
  }
}

export default Main;
