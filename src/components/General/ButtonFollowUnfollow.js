import React, { Component } from "react";
import { getUserToUnfollow, getUserToFollow } from "../../api.js";
import ButtonSubmit from "../General/ButtonSubmit.js";
import "./ButtonFollowUnfollow.css";

class ButtonFollowUnfollow extends Component {
  buttonFollowUnfollow() {
    const { profileUser } = this.props;
    const { currentUser } = this.props;

    if (profileUser._id === currentUser._id) {
      return null;
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
              styling="white-button "
              link=""
              text="Following"
              onClick={() => this.unfollowClick()}
            />
          </div>
        );
      } else {
        return (
          <div>
            <ButtonSubmit
              styling="blue-button "
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
        if (this.props.onFollowProfile) {
          this.props.onFollowProfile(response.data.profileUserDoc);
        }
        this.props.onFollowCurrentUser(response.data.currentUserDoc);
      })
      .catch(err => {
        console.log("wat unfollow", err);
        alert("Sorry cannot cannot unfollow the profile");
      });
  }

  followClick() {
    getUserToFollow(this.props.profileUser)
      .then(response => {
        if (this.props.onFollowProfile) {
          this.props.onFollowProfile(response.data.profileUserDoc);
        }
        this.props.onFollowCurrentUser(response.data.currentUserDoc);
      })
      .catch(err => {
        alert("Sorry cannot cannot follow the profile");
      });
  }

  render() {
    return <div className={this.props.size}>{this.buttonFollowUnfollow()}</div>;
  }
}

export default ButtonFollowUnfollow;
