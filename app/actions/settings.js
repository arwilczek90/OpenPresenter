// @flow
import type {settingsStateType} from '../reducers/settings';
import electronSettings from 'electron-settings';


export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const GET_SETTINGS = 'GET_SETTINGS';


export function getSettings() {
  return electronSettings.get('projectDirectory').then((value) => {
    return {
      type: GET_SETTINGS,
      projectDirectory: value,
    }
  }).catch((error) => {
    return {
      type: GET_SETTINGS,
      errorMessage: error.message
    }
  })

}


export function saveSettings(projectDirectory) {
  return dispatch => {
    electronSettings.set('projectDirectory', projectDirectory).then(() => {
      dispatch({
        type: SAVE_SETTINGS,
        projectDirectory: projectDirectory,
        saved: true
      })
    }).catch((error) => {
      dispatch({
        type: SAVE_SETTINGS,
        errorMessage: error.message,
        saved: false
      })
    })
  }
}


export function getSettingsAsync() {
  return (dispatch) => {
    dispatch(getSettings());
  };
}

export function saveSettingsAsync(projectDirectory) {
  return (dispatch) => {
    dispatch(saveSettings(projectDirectory));
  };

}
