// @flow
import React, { Component } from 'react';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import styles from './SettingsBody.css';



export default class SettingsBody extends Component {


  render() {
    let projectDirectory = this.props.projectDirectory;
    let saveFunction = this.props.saveFunction;
    let projectDirChangeHandler = this.props.projectDirHandler;
    return (
      <div>
        <Card>
          <TextField hintText="Project Directory" id="projectDirTextBox" onChange={projectDirChangeHandler.bind(this)} value={projectDirectory} />
          <RaisedButton  label="Save" onTouchTap={() => {saveFunction()}} />
        </Card>
      </div>
    );
  }
}
