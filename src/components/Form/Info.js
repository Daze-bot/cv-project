/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      info,
      changeInfo,
      changeAvatar,
    } = this.props;

    return (
      <div className="personalInfo">
        <p>Personal Information</p> 
        <form className="infoForm">
          <label htmlFor="infoName">Name</label>
          <input
            className="entry"
            onChange={changeInfo}
            value={info.name}
            type="text"
            name="name"
            id="infoName"
          />
          <label htmlFor="infoAddress">Address</label>
          <input
            className="entry"
            onChange={changeInfo}
            value={info.address}
            type="text"
            name="address"
            id="infoAddress"
          />
          <label htmlFor="infoCity">City</label>
          <input
            className="entry"
            onChange={changeInfo}
            value={info.city}
            type="text"
            name="city"
            id="infoCity"
          />
          <label htmlFor="infoState">State</label>
          <input
            className="entry"
            onChange={changeInfo}
            value={info.state}
            type="text"
            name="state"
            id="infoState"
          />
          <label htmlFor="infoZip">Zip Code</label>
          <input
            className="entry"
            onChange={changeInfo}
            value={info.zip}
            type="text"
            name="zip"
            id="infoZip"
          />
          <label htmlFor="infoPhone">Phone</label>
          <input
            className="entry"
            onChange={changeInfo}
            value={info.phone}
            type="text"
            name="phone"
            id="infoPhone"
          />
          <label htmlFor="infoEmail">Email</label>
          <input
            className="entry"
            onChange={changeInfo}
            value={info.email}
            type="text"
            name="email"
            id="infoEmail"
          />
          <label htmlFor="infoWebsite">Website</label>
          <input
            className="entry"
            onChange={changeInfo}
            value={info.website}
            type="text"
            name="website"
            id="infoWebsite"
          />
          <label htmlFor="infoDescription">Description</label>
          <textarea
            className="entry"
            onChange={changeInfo}
            value={info.description}
            type="text"
            name="description"
            id="infoDescription"
            rows={4}
          />
          <label htmlFor="infoAvatar">Add Photo</label>
          <input
            onChange={changeAvatar}
            type="file"
            name="avatar"
            id="infoAvatar"
            accept="image/*"
          />
        </form>
      </div>
    );
  }
}

export default Info;
