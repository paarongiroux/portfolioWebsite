import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './home.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

const Main = () => {
  return (
    <BrowserRouter>
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/projects' component={Projects}></Route>
            <Route exact path='/contact' component={Contact}></Route>
        </Switch>
    </BrowserRouter>
    
  );
}

export default Main;