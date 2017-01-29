import {fork} from 'redux-saga';
import { settingsSaver, getSettingsListner, projectDirectoryListner } from './settings';




export default function* root () {
  yield [
    settingsSaver(),
    getSettingsListner(),
    projectDirectoryListner()
  ]
}
