import { combineReducers } from 'redux';
import memoData from './memoReducer';

const rootReducer = combineReducers({
  memoData,
});

export default rootReducer;
