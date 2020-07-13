import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from './components/welcome';

import Login from './components/login';
import Signup from './components/signup';
import Success from './components/success';




const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome}/>
          
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/Success" component={Success}/>

          
          
      </Switch>
  </BrowserRouter>
);

export default Routes;