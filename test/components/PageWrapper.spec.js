/**
 * Created by awilczek on 1/22/17.
 */
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PageWrapper from '../../app/components/PageWrapper';


function setup() {
  const component = mount(
    <MuiThemeProvider>
      <PageWrapper>
        <h1>Text</h1>
      </PageWrapper>
    </MuiThemeProvider>
  );
  return {
    component,
    AppBar: component.find('AppBar')
  };
}

describe('PageWrapper Component Tests', () => {
  it('should create AppBar', () => {
    const { AppBar } = setup();
    expect(AppBar.exists()).to.be.true;
  });

  it('should create AppBar with the correct Text', () => {
    const { AppBar } = setup();
    expect(AppBar.text()).to.match(/^OpenPresenter/);
  });

  it('should create AppBar with children', () => {
    const { AppBar } = setup();
    expect(AppBar.children().find('h1').exists()).to.be.true;
  });
});
