import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'

import Home from '../containers/Home';

export default function RouterIndex(){
  return(
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}
