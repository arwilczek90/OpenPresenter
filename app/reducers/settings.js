import {SAVE_SETTINGS, GET_SETTINGS} from '../actions/settings';
import {Map} from 'immutable'
const initialState = Map();


export default function settings(state = initialState, action) {
  switch (action.type) {
    case SAVE_SETTINGS:
        return state.merge({
          projectDirectory: action.projectDirectory,
          errorMessage: action.errorMessage,
          saved: action.saved
          }
        );

    case GET_SETTINGS:
      return state.merge({
        projectDirectory: action.projectDirectory,
        errorMessage: action.errorMessage,
        saved: true
      });
    default:
      return state;
  }
}
