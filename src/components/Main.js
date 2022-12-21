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
          company: '',
          location: '',
          title: '',
          start: '',
          end: '',
          description: '',
        },
      ],
      education: [
        {
          id: uniqid(),
          school: '',
          location: '',
          degree: '',
          start: '',
          end: '',
        },
      ],
    }

    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
  }

  handleInfoChange(e) {
    this.setState((state) => ({
      info: {
        ...state.info,
        [e.target.name]: e.target.value,
      }
    }));
  }

  handleExperienceChange(e, id) {
    this.setState((state) => {
      const experienceEdit = state.experience.map((exp) => {
        if (id === exp.id) {
          return { ...exp, [e.target.name]: e.target.value };
        }
        return exp;
      });
      return { experience: [...experienceEdit] };
    });
  }

  handleAddExperience() {
    this.setState((state) => ({
      experience: [
        ...state.experience,
        {
          id: uniqid(),
          company: '',
          location: '',
          title: '',
          start: '',
          end: '',
          description: '',
        },
      ],
    }));
  }

  handleDeleteExperience(id) {
    this.setState((state) => {
      const tempExperience = state.experience.filter((exp) => exp.id !== id);
      return { experience: [...tempExperience] };
    });
  }

  render() {
    const { info, experience } = this.state;

    return (
      <main>
        <CVForm 
          info={info}
          changeInfo={this.handleInfoChange}
          experience={experience}   
          changeExperience={this.handleExperienceChange}
          addExperience={this.handleAddExperience}    
          deleteExperience={this.handleDeleteExperience}
        />
        <CVDisplay 
          info={info}
        />
      </main> 
    );
  }
}

export default Main;
