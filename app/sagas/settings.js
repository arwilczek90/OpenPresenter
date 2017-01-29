import {call, put, takeLatest} from 'redux-saga/effects';
import {remote} from 'electron';
import settings from 'electron-settings';

function saveSettings(payload) {
  return new Promise((resolve) => {
    settings.set('projectDirectory', payload.projectDirectory).then(() => {
      resolve(true);
    }).catch((error) => {
      resolve({errorMessage: error});
    })
  });
}

function* saveSettingsGenerator(action) {
  yield put({type: 'SAVE_SETTINGS_STARTED'});
  const result = yield call(saveSettings, action.payload);
  yield put({type: 'SAVE_SETTINGS_COMPLETE', payload: {...result}})

}

function* settingsSaver() {
  yield takeLatest("SETTINGS_SAVE_REQUESTED", saveSettingsGenerator);
}

function getSettings() {
  return new Promise((resolve) => {
    settings.get().then((val) => {
      resolve(val);
    }).catch((err) => {
      resolve({errorMessage:err});
    })
  });
}

function* getSettingsGenerator() {
  yield put({type: 'GET_SETTINGS_STARTED'});
  const settings = yield call(getSettings);
  yield put({type: 'GET_SETTINGS_COMPLETED', payload: {...settings}});
}

function* getSettingsListner() {
  yield takeLatest("SETTINGS_GET_REQUESTED", getSettingsGenerator)
}

function* projectDirectoyGenerator(action) {
  yield put({type: 'PROJECT_DIRECTOY_INPUT', payload: {input: action.payload.input}});

}

function* projectDirectoryListner() {
  yield takeLatest("PROJECT_DIRECTORY_INPUT_SENT", projectDirectoyGenerator)
}

export default {settingsSaver, getSettingsListner, projectDirectoryListner};
