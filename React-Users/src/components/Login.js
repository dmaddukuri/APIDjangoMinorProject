import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import NewStudentForm from "./NewStudentForm";

class Login extends Component {

  onSubmit = () => {
     
          this.props.history.push('/welcome/');
      
    }

  render() {
    return (
      <form>
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
        <button onClick={this.onSubmit}>Login</button>
      </form>
    );
  }
}

export default Login;