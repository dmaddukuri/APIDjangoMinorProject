import React, { Component } from 'react';
import axios from "axios";
import { Table } from "reactstrap";
import { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { API_URL } from "../constants";
import './signup.css';
import success from './success';
import list from './Rlist';

import {Row,Col,Container,Dropdown,Accordion,Button,Form,Spinner} from 'react-bootstrap';

import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom';

import './welcome.css';

class Rlist extends Component {

  state={
    //Rname:"",
    //cuisine:"",
    //rating:"",
    students: []
  };
 /* componentDidMount0() {
    if (this.props.r_list) {
      const { Rname, cuisine, rating } = this.props.r_list;
      this.setState({ Rname, cuisine, rating });
    }
  } */
  componentDidMount() {
    this.resetState();
   // axios.get("http://127.0.0.1:8000/apii/RestaurantList/").then(res => this.setState({ students: res.data }));
  
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getStudents = () => {
    axios.get("http://127.0.0.1:8000/apii/RestaurantList/").then(res => this.setState(
      { students: res.data })); //,
        //imageURL:res.data.image}));
   
  };

  resetState = () => {
    this.getStudents();
  };

getStudent = e => {
    e.preventDefault();
    this.state.Rname="Bawarchi";
    this.state.cuisine= "NorthIndian";
    this.state.rating= "4.9";
   let res = axios.get("http://127.0.0.1:8000/apii/RestaurantList/",this.state).then(() => {
   let data = res.data;
   console.log("data="); 
   console.log(data); 

    console.log("state="); 
        console.log(this.state)

      document.getElementById("p1").innerHTML = data;  
     // this.props.resetState();
    //  this.props.toggle();

    //this.props.history.push('/list')
    });
  };
defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };  

  makelistData() {
 // const a = {this.state.students}

  }
  
 /* render() {
    return (
        <div className="row " id="Body">
        <div className="medium-12 columns">
        &nbsp;&nbsp;&nbsp;&nbsp;<h3 id="welcomeText">Welcome to Our restaurant</h3>
          <br/>
           <p id="p1">  {this.state.students} <br/> </p>                
        </div>
      </div>
    );
  }
  */

 render() {
 const students = this.state.students;
 //const stu =  this.state.students;

  return (
       
    <div class="row">     
   
      <div  class="col-md-4 col-md-30">
              <div class="container-fluid">
              <h4 align="center">  Our Restaurant List </h4>
              <img align="right" src="/Images/restaurant.jpg" />
              </div>
            </div> 
            <div class="col-md-8 col-md-70">
            <div>
              <Table className="table table-striped" responsive="sm" striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Restaurant name</th>
                        <th>Cuisine</th>
                        <th>Rating</th>                       
                      </tr>
                    </thead>
                    <tbody>
                      {!students || students.length <= 0 ? (
                        <tr>
                          <td colSpan="4" align="left">
                            <b>Ops, no one here yet</b>
                          </td>
                        </tr>
                      ) : (
                        students.map(student => (
                          <tr key={student.pk}>                          
                            <td><img src={student.image} /></td>
                            <td>{student.Rname}</td>
                            <td>{student.cuisine}</td>
                            <td>{student.rating}</td>                         
                           </tr>
                        ))
                      )}                                           
                      </tbody>
                  </Table>
                  </div>
            </div>
            
                           
        </div>
            

  )
}
}

export default Rlist;
