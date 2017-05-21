import { SET_CURRENT_ID, SET_CURRENT_TEXT, UPDATE_MEMO } from '../constants/memo';

export function updateMemo() {
  return {
    type: UPDATE_MEMO,
  };
}

export function setCurrentText(text) {
  return {
    type: SET_CURRENT_TEXT,
    text,
  };
}

export function setCurrentId(id) {
  return {
    type: SET_CURRENT_ID,
    id,
  };
}
