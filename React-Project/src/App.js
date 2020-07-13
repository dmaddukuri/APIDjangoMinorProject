import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/foundation.min.css';
import './components/custom.css';
import Routes from './routes';
import Button from 'react-bootstrap/Button';
import Header from './components/header';
import Signup from './components/signup';
function App() {
  return (
    <div className="off-canvas-wrapper">
    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>  
      <div className="off-canvas-content" data-off-canvas-content> 
        <Header name="ConsultAdd"/>
        <Routes name="ConsultAdd"/>
        <hr/>
     
      </div>
    </div>
  </div>
  );
}


/*
function App() {
  return (
    <div className="App">
      <Header/>
      <Signup/>
    </div>
  );
}
*/
export default App;
