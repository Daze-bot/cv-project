/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import CVForm from "./Form/CVForm";
import CVDisplay from "./Display/CVDisplay";
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
        avatarType: 'default',
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

    this.handleAvatarChange=this.handleAvatarChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
  }

  handleAvatarChange(e) {
    const file = e.target.files[0];

    if (!file) {
      this.setState((state) => ({
        info: {
          ...state.info,
          avatar: Stock,
          avatarType: 'default',
        }
      }))
    }

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.setState((state) => ({
        info: {
          ...state.info,
          avatar: reader.result,
          avatarType: 'userAvatar',
        }
      }))
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
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

  handleEducationChange(e, id) {
    this.setState((state) => {
      const educationEdit = state.education.map((edu) => {
        if (id === edu.id) {
          return { ...edu, [e.target.name]: e.target.value };
        }
        return edu;
      });
      return { education: [...educationEdit] };
    });
  }

  handleAddEducation() {
    this.setState((state) => ({
      education: [
        ...state.education,
        {
          id: uniqid(),
          school: '',
          location: '',
          degree: '',
          start: '',
          end: '',
        },
      ],
    }));
  }

  handleDeleteEducation(id) {
    this.setState((state) => {
      const tempEducation = state.education.filter((edu) => edu.id !== id);
      return { education: [...tempEducation] };
    });
  }

  render() {
    const { info, experience, education } = this.state;

    return (
      <main>
        <CVForm 
          info={info}
          changeInfo={this.handleInfoChange}
          changeAvatar={this.handleAvatarChange}
          experience={experience}   
          changeExperience={this.handleExperienceChange}
          addExperience={this.handleAddExperience}    
          deleteExperience={this.handleDeleteExperience}
          education={education}
          changeEducation={this.handleEducationChange}
          addEducation={this.handleAddEducation}
          deleteEducation={this.handleDeleteEducation}
        />
        <CVDisplay 
          info={info}
          experience={experience}
          education={education}
        />
      </main> 
    );
  }
}

export default Main;
