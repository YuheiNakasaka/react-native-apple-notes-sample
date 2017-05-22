import { INIT_MEMO_LISTS, SEARCH_MEMO_LISTS, SET_CURRENT_ID, SET_CURRENT_TEXT, SET_CURRENT_SEARCH_WORD, CLEAR_CURRENT_SEARCH_WORD, UPDATE_MEMO, DELETE_MEMO } from '../constants/memo';

export function initMemoLists() {
  return {
    type: INIT_MEMO_LISTS,
  };
}

export function searchMemoLists() {
  return {
    type: SEARCH_MEMO_LISTS,
  };
}

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

export function setCurrentSearchWord(searchWord) {
  return {
    type: SET_CURRENT_SEARCH_WORD,
    searchWord,
  };
}

export function clearCurrentSearchWord() {
  return {
    type: CLEAR_CURRENT_SEARCH_WORD,
  };
}

export function deleteMemo() {
  return {
    type: DELETE_MEMO,
  };
}
