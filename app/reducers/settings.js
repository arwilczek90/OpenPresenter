import {Map} from 'immutable'
const initialState = Map();


export default function settings(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_SETTINGS_SUCCESS':
        return state.merge({
          saved: true
          }
        );

    case 'SAVE_SETTINGS_ERROR':
      return state.merge({
        errorMessage:action.payload.errorMessage,
        saved: false
      });
    case 'GET_SETTINGS_COMPLETED':
      return state.merge({
        projectDirectory: action.payload.projectDirectory,
        saved: true
      });
    case 'GET_SETTINGS_ERROR':
      return state.merge({
        errorMessage: action.payload.errorMessage,
        saved: true
      });
    case 'PROJECT_DIRECTOY_INPUT':
      return state.merge({
        projectDirectory: action.payload.input,
        saved: false
      });
    default:
      return state;
  }
}
