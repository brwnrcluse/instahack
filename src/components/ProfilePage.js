import React, { Component } from "react";
import { Link } from "react-router-dom";

import GridView from "./GridView.js";

import "./ProfilePage.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };
  }
  render() {
    const { currentUser } = this.state;
    // console.log(currentUser);
    return (
      <div className="GridView">
        PROFILE PAGE
        <GridView currentUser={currentUser} />
      </div>
    );
  }
}

export default ProfilePage;
