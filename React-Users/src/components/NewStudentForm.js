import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewStudentForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    
  };

  /*componentDidMount() {
    if (this.props.student) {
      const { name,email, password } = this.props.student;
      this.setState({ name, email, password });
    }
  }*/

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  /*editStudent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };*/

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <img align="left" src="/Images/food2.jpg"/>
                </div>
                <div class="col-xl-1 col-lg-1"></div>
                <div  class="col-xl-4 col-lg-4">
                    <div class="box" align="center">
                        <h1>Signup</h1>
                            <form class="form-vertical pt-4" name="form1"  onSubmit={this.createStudent}>
                            <div class="form-group"><input type="text" name="username" placeholder="Username" onChange={this.onChange} value={this.defaultIfEmpty(this.state.username)}/></div>
                            <div class="form-group"><input class="mail" type="email" name="email" placeholder="Email" title="invalid"  onChange={this.onChange} value={this.defaultIfEmpty(this.state.email)} /></div>
                            <div class="form-group"><input type="password" id="psw" name="password" placeholder="Enter your password"  onChange={this.onChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required value={this.defaultIfEmpty(this.state.password)}/></div>  
                            <input class="form-group btn btn-success px-5" type="submit" name="signup_submit" value="Sign up"/><br/>
                            <p align="center"><font >Already have an account? </font><a href="{% url 'signin' %}"><font>Sign in</font></a></p>
                            <button align="left" class="from-group btn btn-primary">facebook</button>
                            <button align="right" class="from-group btn btn-danger">Google</button>                   
                            </form>
                        <p>Login with</p>
                    </div>
                </div>                
            </div> 
    )
  }
}

export default NewStudentForm;
