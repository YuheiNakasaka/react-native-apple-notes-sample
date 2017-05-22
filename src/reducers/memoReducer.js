import { INIT_MEMO_LISTS, UPDATE_MEMO_LISTS, SET_CURRENT_ID, SET_CURRENT_TEXT, SET_CURRENT_SEARCH_WORD, CLEAR_CURRENT_SEARCH_WORD, UPDATE_MEMO } from '../constants/memo';

const initialState = {
  id: 0,
  text: '',
  searchWord: '',
  memoList: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_MEMO_LISTS:
      return {
        ...state,
      };
    case UPDATE_MEMO_LISTS:
      return {
        ...state,
        memoList: action.memoList,
      };
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
    case SET_CURRENT_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.searchWord,
      };
    case CLEAR_CURRENT_SEARCH_WORD:
      return {
        ...state,
        searchWord: '',
      };
    default:
      return state;
  }
}
