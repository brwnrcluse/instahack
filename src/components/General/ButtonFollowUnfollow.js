import React, { Component } from "react";
import {
  getUserProfile,
  getUserToUnfollow,
  getUserToFollow
} from "../../api.js";
import ButtonSubmit from "../General/ButtonSubmit.js";
import ButtonLink from "../General/ButtonLink.js";
import "./ButtonFollowUnfollow.css";

class ButtonFollowUnfollow extends Component {
  buttonFollowUnfollow() {
    const { profileUser } = this.props;
    const { currentUser } = this.props;

    if (profileUser._id === currentUser._id) {
      return (
        <div>
          <ButtonLink
            styling="white-button"
            link="/accounts/edit"
            text="Edit Profile"
          />
        </div>
      );
    }

    if (profileUser) {
      console.log("Is Following?", profileUser._id, currentUser.following);

      if (currentUser.following.includes(profileUser._id)) {
        console.log(
          "Is Following?",
          currentUser.following.includes(profileUser._id)
        );
        return (
          <div>
            <ButtonSubmit
              styling="blue-button"
              link=""
              text="Unfollow"
              onClick={() => this.unfollowClick()}
            />
          </div>
        );
      } else {
        return (
          <div>
            <ButtonSubmit
              styling="blue-button"
              link=""
              text="Follow"
              onClick={() => this.followClick()}
            />
          </div>
        );
      }
    } else {
      return <div>Loading</div>;
    }
  }

  unfollowClick() {
    getUserToUnfollow(this.props.profileUser)
      .then(response => {
        this.props.onFollowProfile(response.data.profileUserDoc);
        this.props.onFollowCurrentUser(response.data.currentUserDoc);
      })
      .catch(() => {
        alert("Sorry cannot cannot unfollow the profile");
      });
  }

  followClick() {
    getUserToFollow(this.props.profileUser)
      .then(response => {
        this.props.onFollowProfile(response.data.profileUserDoc);
        this.props.onFollowCurrentUser(response.data.currentUserDoc);
      })
      .catch(() => {
        alert("Sorry cannot cannot unfollow the profile");
      });
  }

  render() {
    console.log(this.props.profileUser);
    return <div>{this.buttonFollowUnfollow()}</div>;
  }
}

export default ButtonFollowUnfollow;