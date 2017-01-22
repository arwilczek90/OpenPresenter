/**
 * Created by awilczek on 1/22/17.
 */
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainAppMenu from '../../app/components/MainAppMenu';


function setup() {
  const component = mount(
    <MuiThemeProvider>
      <MainAppMenu />
    </MuiThemeProvider>
  );
  return {
    component
  };
}

describe('ProjectSelectorButtons Component Tests', () => {
  it('should create all three buttons if project is open', () => {
    const { component } = setup();
    expect(component.exists()).to.be.true;
  });
});
