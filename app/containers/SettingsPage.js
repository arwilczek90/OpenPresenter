/**
 * Created by awilczek on 1/22/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PageWrapper from '../components/PageWrapper';
import SettingsBody from '../components/SettingsBody';
import * as settingsActions from '../actions/settings'


function mapStateToProps(state) {
  return {
    projectDirectory: state.projectDirectory,
    errorMessage: state.errorMessage,
    saved: state.saved,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(settingsActions, dispatch);
}

class SettingsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    this.props.getSettingsAsync();
  }

  saveSettings(projectDirectory){
    this.props.saveSettingsAsync(projectDirectory);
  }

  projectDirectoryChange(event){
    this.setState({projectDirectory:event.target.value});
  }

  render() {
    let projectDirectory = this.props.projectDirectory;
    return (
      <PageWrapper>
        <SettingsBody handleChange={this.projectDirectoryChange.bind(this)} saveFunction={this.saveSettings.bind(this)} projectDirectory={projectDirectory} />
      </PageWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

