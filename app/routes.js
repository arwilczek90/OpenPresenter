// @flow
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ProjectSelector from './containers/ProjectSelector';


export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/editor/home" />
    <Route path="/editor/home" component={HomePage} />
    <Route path="/editor/projects" component={ProjectSelector} />
  </Route>

);
