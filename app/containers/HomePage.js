// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import PageWrapper from '../components/PageWrapper';

export default class HomePage extends Component {
  render() {
    return (
      <PageWrapper>
        <Home />
      </PageWrapper>
    );
  }
}
