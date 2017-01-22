import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import injectTapEvent from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';
import './app.global.css';


injectTapEvent();

const history = hashHistory;
render(
  <MuiThemeProvider>
    <Router history={history} routes={routes} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
