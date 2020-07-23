import React, { Component } from 'react';
import axios from "axios";
import { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { API_URL } from "../constants";
import './signup.css';
import success from './success';
import list from './Rlist';
import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom';
class login extends React.Component {
    state={
        name:"",
        email:"",
        password:"",
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    getStudent = e => {
        e.preventDefault();
        axios.get(API_URL, this.state).then(() => {
            console.log(this.state)
         // this.props.resetState();
        //  this.props.toggle();

        this.props.history.push('/list')
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
                <br/>
                    <h2>Login</h2>
                    <br/>
                   
                        <form class="form-vertical pt-4" name="form1"  onSubmit={this.getStudent}>
                
                        <input class="mail" type="email" name="email" placeholder="Email" title="invalid"  onChange={this.onChange} value={this.defaultIfEmpty(this.state.email)} />
                        <input type="password" id="psw" name="password" placeholder="Enter your password"  onChange={this.onChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required value={this.defaultIfEmpty(this.state.password)}/><br/>
                                           
                        <input type="submit" name="signup_submit" value="Login"/><br/><br/>                     
                    
                        </form>
                        <br/>
                </div>
            </div>                
        </div>
        )
    }
   /* render() {       
        return (
            <div className="row" id="Body">
            <div className="medium-5 columns left">
            <h4>Login</h4>
            <div id="login-box" align="left" >
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
                <label>Password</label>
                <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
                <input type="submit" className="button success" value="Login" onClick={this.login}/>
            </div>
            </div>
          </div>
        )
    }
*/
}
export default login;
