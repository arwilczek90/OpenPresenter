/**
 * Created by awilczek on 1/22/17.
 */
/**
 * Created by awilczek on 1/22/17.
 */
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProjectSelectorButtons from '../../app/components/ProjectSelectorButtons';


function setup(projectOpen) {
  const component = mount(
    <MuiThemeProvider>
      <ProjectSelectorButtons projectOpen={projectOpen} />
    </MuiThemeProvider>
  );
  return {
    component,
    NewProjectButton: component.find('[data-qa="ProjectSelectorButtons::NewProject"]'),
    OpenProjectButton: component.find('[data-qa="ProjectSelectorButtons::OpenProject"]'),
    ReturnHomeButton: component.find('[data-qa="ProjectSelectorButtons::ReturnHome"]')
  };
}

describe('ProjectSelectorButtons Component Tests', () => {
  it('should create all three buttons if project is open', () => {
    const { NewProjectButton, OpenProjectButton, ReturnHomeButton } = setup(true);
    expect(NewProjectButton.exists()).to.be.true;
    expect(OpenProjectButton.exists()).to.be.true;
    expect(ReturnHomeButton.exists()).to.be.true;
  });

  it('should create only two buttons if project is not open', () => {
    const { NewProjectButton, OpenProjectButton, ReturnHomeButton } = setup(false);
    expect(NewProjectButton.exists()).to.be.true;
    expect(OpenProjectButton.exists()).to.be.true;
    expect(ReturnHomeButton.exists()).to.be.false;
  });
});
