/**
 * Created by awilczek on 1/22/17.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ProjectSelector extends React.Component {

  returnHome() {
    this.context.router.push('/editor/home');
  }

  render() {
    const projectOpen = this.props.projectOpen || false;
    return (
      <div>
        <RaisedButton label="New" data-qa="ProjectSelectorButtons::NewProject" />
        <RaisedButton label="Open" data-qa="ProjectSelectorButtons::OpenProject" />

        {projectOpen ? <RaisedButton label="Return To Project" onTouchTap={this.returnHome.bind(this)} data-qa="ProjectSelectorButtons::ReturnHome" /> : null}
      </div>
    );
  }
}

ProjectSelector.contextTypes = {
  router: React.PropTypes.object
};

ProjectSelector.propTypes = {
  projectOpen: React.PropTypes.bool
};

ProjectSelector.defaultProps = {
  projectOpen: false
};

export default ProjectSelector;
