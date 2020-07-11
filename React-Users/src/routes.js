import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from '././components/Welcome';
import Home from '././components/Home';
import Login from '././components/Login';
import Signup from '././components/Signup';
import NotFound from '././components/NotFound';


function Routes(){
    return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
)
    }

export default Routes;