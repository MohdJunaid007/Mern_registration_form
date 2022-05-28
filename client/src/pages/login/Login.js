import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Link, NavLink, useHistory, BrowserRouter as Router, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Switch, Route, Routes,Redirect } from "react-router";
import { createBrowserHistory } from 'history';


import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";

import Widget from "../../components/Widget/Widget";
import Footer from "../../components/Footer/Footer";
//import { loginUser } from "../../actions/auth"; //left------
import hasToken from "../../services/authService";

import loginImage from "../../assets/loginImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import TwitterIcon from "../../components/Icons/AuthIcons/TwitterIcon.js";
import FacebookIcon from "../../components/Icons/AuthIcons/FacebookIcon.js";
import GithubIcon from "../../components/Icons/AuthIcons/GithubIcon.js";
import LinkedinIcon from "../../components/Icons/AuthIcons/LinkedinIcon.js";



const Login = () => {
  const history = useHistory();
  //  const history = createBrowserHistory();
 


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const loginUser = async (e) => {
    e.preventDefault();
    //console.log(email, password, "data aarah h")

    const res = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // headers: {
      //   "Content-Type": 'text/plain'
      // },

      body: JSON.stringify({
        email: email,       /// we can also only write it as password and email as 
        password: password, /// both are same
        
      })
    })

    const data = await res.json();
   // console.log(data);
    //console.log(res)


    if (res.status == 400 || !data) {
      //  window.alert("invalid credentials");

      const myElement = document.getElementById("correct");
      //const myElement = document.getElementsByClassName("correct")
      myElement.innerHTML = 'invalid credentials';
      myElement.style.backgroundColor = "red";
      myElement.style.color = "white";
      myElement.style.padding = "5px";
      myElement.style.borderRadius = "10px";
      myElement.style.textAlign = "center";

    } else {
      // window.alert("successfully login");
      const myElement = document.getElementById("correct");
      // const myElement = document.getElementsByClassName("correct")
      myElement.innerHTML = 'successfully login';
      myElement.style.backgroundColor = "green";
      myElement.style.color = "white";
      myElement.style.padding = "5px";
      myElement.style.marginTop = "5px";
      myElement.style.borderRadius = "10px";
      myElement.style.textAlign = "center";
      history.push('/dashboard')
      window.location.reload();
      
      

    }
  }
  // const doLogin = (e) => {
  //   e.preventDefault();
  //   props.dispatch(loginUser({ password: state.password, email: state.email }))
  // }


  return (
    <>
      <div className="auth-page">
        <Container className="col-12">
          <Row className="d-flex align-items-center">
            <Col xs={12} lg={6} className="left-column">
              <Widget className="widget-auth widget-p-lg">
                <div className="d-flex align-items-center justify-content-between py-3">
                  <p className="auth-header mb-0">Login</p>
                  <div className="logo-block">
                    <SofiaLogo />
                    <p className="mb-0">JD</p>
                  </div>
                </div>
                <div className="auth-info my-2">
                  {/* <p>This is a real app with Node.js backend - use <b>"admin@flatlogic.com / password"</b> to login!</p> */}
                  <p> This is a real app with Node.js backend - register to see what it can do  </p>

                </div>
                {/* <form onSubmit={(event) => doLogin(event)}> */}
                <form method="POST">
                  <FormGroup className="my-3">
                    <FormText>Email</FormText>
                    <Input
                      id="email"
                      className="input-transparent pl-3"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup className="my-3">
                    <div className="d-flex justify-content-between">
                      <FormText>Password</FormText>
                      <a href="/error"> Forgot password? </a>
                    </div>
                    <Input
                      id="password2"
                      className="input-transparent pl-3"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      required
                      name="password"
                      placeholder="Password"
                    />
                  </FormGroup>
              
                  <br></br>
                  <div id="wrong" role="alert">
                  </div>
                  <div id="correct" role="alert">                  </div>
                  <div className="correct wrong"></div>
                  <div className="bg-widget d-flex justify-content-center">
                    <Button onClick={loginUser} className="rounded-pill my-3" type="submit" color="secondary-red">Login</Button>
                  </div>
                  <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                  <div className="d-flex align-items-center my-3">
                    <p className="social-label mb-0">Login with</p>
                    <div className="socials">
                      <a href="#"><GoogleIcon /></a>
                      <a href="#"><TwitterIcon /></a>
                      <a href="#"><FacebookIcon /></a>
                      <a href="#"><GithubIcon /></a>
                      <a href="#"><LinkedinIcon /></a>
                    </div>
                  </div>
                  <a href="/register">Don’t have an account? Sign Up here</a>
                </form>
              </Widget>
            </Col>
            <Col xs={0} lg={6} className="right-column">
              <div>
                <img src={loginImage} alt="Error page" />
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Login;


/// git hub
