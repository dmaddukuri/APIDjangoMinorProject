import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import NewStudentForm from "./components/NewStudentForm";
import Home from "./components/Home";
import Routes from './routes';
import './styles/foundation.min.css';
import './styles/custom.css';

//class App extends Component {
function App() {  
//render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
 // }
}

export default App;
