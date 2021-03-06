import { select, take, call, put, fork } from 'redux-saga/effects';
import { INIT_MEMO_LISTS, SEARCH_MEMO_LISTS, UPDATE_MEMO_LISTS, UPDATE_MEMO, DELETE_MEMO } from '../constants/memo';
import storage from '../libs/storage';

function getMemoFromStorage() {
  return storage.getAllDataForKey('memo').then(ret => ret);
}

function _updateMemo(state) {
  storage.save({
    key: 'memo',
    id: `${state.memoData.id}`,
    data: {
      id: `${state.memoData.id}`,
      text: state.memoData.text,
      updatedAt: new Date(),
    },
  });
}

function _deleteMemo(state) {
  storage.remove({
    key: 'memo',
    id: `${state.memoData.id}`,
  });
}

function* initMemos() {
  while (yield take(INIT_MEMO_LISTS)) {
    const memoList = yield call(getMemoFromStorage);
    yield put({ type: UPDATE_MEMO_LISTS, memoList });
  }
}

function* searchMemoLists() {
  while (yield take(SEARCH_MEMO_LISTS)) {
    const state = yield select();
    const memoList = yield call(getMemoFromStorage);
    const filteredList = memoList.filter((list) => {
      if (list.text.indexOf(state.memoData.searchWord) !== -1) {
        return list;
      }
      return false;
    });
    yield put({ type: UPDATE_MEMO_LISTS, memoList: filteredList });
  }
}

function* updateMemo() {
  while (yield take(UPDATE_MEMO)) {
    const state = yield select();
    yield _updateMemo(state);
    const memoList = yield call(getMemoFromStorage);
    yield put({ type: UPDATE_MEMO_LISTS, memoList });
  }
}

function* deleteMemo() {
  while (yield take(DELETE_MEMO)) {
    const state = yield select();
    yield _deleteMemo(state);
    const memoList = yield call(getMemoFromStorage);
    yield put({ type: UPDATE_MEMO_LISTS, memoList });
  }
}

function* dataSaga() {
  yield fork(initMemos);
  yield fork(searchMemoLists);
  yield fork(updateMemo);
  yield fork(deleteMemo);
}

export default dataSaga;
