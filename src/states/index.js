import { combineReducers } from 'redux';

import { reduce as TaskAttributesReducer } from './TaskAttributesState';

// Register your redux store under a unique namespace
export const namespace = 'task-attributes';

// Combine the reducers
export default combineReducers({
  taskAttributes: TaskAttributesReducer
});
