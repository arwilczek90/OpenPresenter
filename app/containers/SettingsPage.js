/**
 * Created by awilczek on 1/22/17.
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PageWrapper from '../components/PageWrapper';
import SettingsBody from '../components/SettingsBody';


function mapStateToProps(state) {
  return {
    projectDirectory: state.settingsReducer.get('projectDirectory', ''),
    errorMessage: state.settingsReducer.get('errorMessage', null),
    saved: state.settingsReducer.get('saved',true),
  };
}

class SettingsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    this.props.dispatch({type: 'SETTINGS_GET_REQUESTED'});
  }

  saveSettings(){
    console.log(this.props.projectDirectory);
    this.props.dispatch({type:'SETTINGS_SAVE_REQUESTED', payload:{projectDirectory:this.props.projectDirectory}});
  }

  projectDirectoryChange(event, newValue){
    this.props.dispatch({type: 'PROJECT_DIRECTORY_INPUT_SENT', payload: {input:newValue}});
  }

  render() {
    let projectDirectory = this.props.projectDirectory;
    return (
      <PageWrapper>
        <SettingsBody projectDirHandler={this.projectDirectoryChange.bind(this)} saveFunction={this.saveSettings.bind(this)} projectDirectory={projectDirectory} />
      </PageWrapper>
    );
  }
}

SettingsPage.propTypes = {
  projectDirectory: PropTypes.string,
  saved: PropTypes.bool,
  errorMessage: PropTypes.string
}

export default connect(mapStateToProps)(SettingsPage);

