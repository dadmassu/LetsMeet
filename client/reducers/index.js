import { combineReducers } from 'redux';
import _ from 'lodash';

const entities = (state = { events: [], currentUser: {} }, action) => {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities);
  }

  if (action.type === 'NEW_EVENT_SUCCESS') {
    console.log('HYPE');
  }

  return state;
};

const errorMessages = (state = null, action) => {
  const { error } = action;
  if (error) return action.error;
  return state;
};

export default combineReducers({
  entities,
  errorMessages,
});
