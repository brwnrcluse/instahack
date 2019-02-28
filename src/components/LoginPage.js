import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { postLogIn } from "../api";

import "./LoginPage.css";

import ButtonLink from "./ButtonLink.js";
import ButtonSubmit from "./ButtonSubmit.js";
import Footer from "./Footer.js";

import InstagramLogo from "../images/Instagram_logo.png";
import whitefb from "../images/facebookiconwhite.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      originalPassword: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //submit login info to the back-end...
    postLogIn(this.state).then(response => {
      console.log("Log In", response.data);
      this.props.loginSuccess(response.data);
    });
  }

  render() {
    return this.props.currentUser ? (
      <Redirect to="/" />
    ) : (
      <div className="LoginPage">
        <img
          className="instagramlogo"
          src={InstagramLogo}
          alt="instagram logo"
        />

        {/* <img className="whitefb" src={whitefb} alt="facebook icon" /> */}

        <ButtonLink
          text="Continue with Facebook"
          styling="blue-button btn font-size:24px"
          link="https://www.facebook.com"
          className="buttonfacebook"
        >
          <i className="fa fa-facebook-official" />
          <i style="font-size:24px" class="fa">
            &#xf230;
          </i>
        </ButtonLink>

        {/* <button style="font-size:24px">
          <i className="fab fa-facebook" style="font-size:24px;color:white" />{" "}
          Continue on facebook
        </button> */}

        <div className="d-flex flex-row align-items-center hro">
          <hr />
          <p className="or">OR</p>
          <hr />
        </div>

        <form
          className="logInForm"
          onSubmit={event => this.handleSubmit(event)}
        >
          <div className="formField">
            <div>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.email}
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                onChange={event => this.genericOnChange(event)}
                value={this.state.originalPassword}
                name="originalPassword"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>

          <ButtonSubmit text="Log In" styling="blue-button" />
        </form>

        <a href="#" className="forgotpassword">
          Forgot password?
        </a>

        <Footer
          text="Don't have an account?"
          link="/accounts/signup"
          textLink="Sign up"
        />
      </div>
    );
  }
}

export default LoginPage;
