import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './home.js';
import About from './about.js';
import Projects from './Projects.js';

const Main = () => {
  return (
    <BrowserRouter>
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/projects' component={Projects}></Route>
        </Switch>
    </BrowserRouter>
    
  );
}

export default Main;