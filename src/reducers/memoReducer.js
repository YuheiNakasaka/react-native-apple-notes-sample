import { SET_CURRENT_ID, SET_CURRENT_TEXT, UPDATE_MEMO } from '../constants/memo';

const initialState = {
  id: 0,
  text: '',
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MEMO:
      return {
        ...state,
      };
    case SET_CURRENT_ID:
      return {
        ...state,
        id: action.id,
      };
    case SET_CURRENT_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}
