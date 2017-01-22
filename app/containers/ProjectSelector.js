/**
 * Created by awilczek on 1/22/17.
 */
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ProjectSelectorButtons from '../components/ProjectSelectorButtons';

export default class ProjectSelector extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { projectOpen: true };
  }
  render() {
    return (
      <PageWrapper>
        <ProjectSelectorButtons projectOpen={this.state.projectOpen} />
      </PageWrapper>
    );
  }
}
