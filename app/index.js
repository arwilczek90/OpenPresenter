import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './app.global.css';

const history = hashHistory;
render(
  <Router history={history} routes={routes} />,
  document.getElementById('root')
);
