// @flow
import React, { Component } from 'react';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import styles from './SettingsBody.css';



export default class SettingsBody extends Component {
  updateProjectDirectory(event){
    this.setState({
      projectDirectory: event.target.value
    })
  }

  render() {
    let projectDirectory = this.props.projectDirectory;
    let saveFunction = this.props.saveFunction;
    return (
      <div>
        <Card>
          <TextField hintText="Project Directory" id="projectDirTextBox" onChange={this.updateProjectDirectory.bind(this)} defaultValue={projectDirectory} />
          <RaisedButton  label="Save" onTouchTap={() => {saveFunction(this.state.projectDirectory)}} />
        </Card>
      </div>
    );
  }
}
