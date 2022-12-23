/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Phone from '../../imgs/phone.svg';
import Email from '../../imgs/email.svg';
import Location from '../../imgs/location.svg';
import Website from '../../imgs/website.svg';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    let imgClass = 'stockAvatar';

    if (info.avatarType === 'default') {
      imgClass = 'stockAvatar';
    } else {
      imgClass = 'userAvatar';
    }

    return (
      <div className="displaySidebar">
        <div className="avatarContainer">
          <img className={imgClass} src={info.avatar} alt="Avatar"/>
        </div>
        <div className="sidebarDescription">
          <h2>ABOUT ME</h2>
          <p className="infoDescription">{info.description}</p>
        </div>
        <hr></hr>
        <div className="sidebarContact">
          <div className="sidebarPhone contactImgContainer">
            <img src={Phone} alt="Phone Number"></img>
            <p>{info.phone}</p>
          </div>
          <div className="sidebarEmail contactImgContainer">
            <img src={Email} alt="Email Addresss"></img>
            <p>{info.email}</p>
          </div>
          <div className="sidebarLocation contactImgContainer">
            <img src={Location} alt="Address"></img>
            <div>
              <p>{info.address}</p>
              <p>{info.city}, {info.state} {info.zip}</p>
            </div>
          </div>
          <div className="sidebarWebsite contactImgContainer">
            <img src={Website} alt="Website"></img>
            <a href={info.website} target="_blank" rel="noreferrer">{info.website}</a>
          </div>
        </div>
      </div> 
    );
  }
}

export default Sidebar;
