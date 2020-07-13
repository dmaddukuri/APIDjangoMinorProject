import React, { Component } from 'react';
import axios from "axios";
import { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { API_URL } from "../constants";
import './signup.css';
import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom';
class signup extends React.Component {
    state={
        name:"",
        email:"",
        password:"",
    };
    // componentDidMount() {
    //     if (this.props.user) {
    //       const {name, email, password } = this.props.user;
    //       this.setState({ name, email, password });
    //     }
    //   }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    createStudent = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            console.log(this.state)
         // this.props.resetState();
        //  this.props.toggle();

        //return (<Redirect to={'/login'}/>)

        this.props.history.push('/login')
        });
      };
    defaultIfEmpty = value => {
        return value === "" ? "" : value;
      };
    render() {
        return (
            <div class="row">
            <div class="col-xl-6 col-lg-6">
                <img align="left" src="/Images/online-shopping1.jpg" />
            </div>
            <div class="col-xl-1 col-lg-1"></div>
            <div  class="col-xl-4 col-lg-4">
                <div id="login-box" align="center" >
                    <h2>Registration</h2>
                        <form class="form-vertical pt-4" name="form1"  onSubmit={this.createStudent}>
                        <input type="text" name="name" placeholder="Username" onChange={this.onChange} value={this.defaultIfEmpty(this.state.username)}/> 
                        <input class="mail" type="email" name="email" placeholder="Email" title="invalid"  onChange={this.onChange} value={this.defaultIfEmpty(this.state.email)} />
                        <input type="password" id="psw" name="password" placeholder="Enter your password"  onChange={this.onChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required value={this.defaultIfEmpty(this.state.password)}/><br/>
                                           
                        <input type="submit" name="signup_submit" value="Sign up"/><br/><br/>                     
                    
                        </form>
                        <br/>
                        <button align="left" class="Facebook" onClick={event =>  window.location.href='https://facebook.com/'}> Facebook</button> &nbsp;&nbsp;
                        <button align="right" class="Google" onClick={event =>  window.location.href='https://google.com/'}> Google</button>  &nbsp;&nbsp;                      
                        <button class="Twitter" onClick={event =>  window.location.href='https://twitter.com/explore'}>Twitter</button>  
                                 
                        
                     
                
                </div>
            </div>                
        </div>
        )
    }
}

//module.exports = row;
export default signup
