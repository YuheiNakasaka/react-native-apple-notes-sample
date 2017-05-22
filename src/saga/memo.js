import { select, take, call, put, fork } from 'redux-saga/effects';
import { INIT_MEMO_LISTS, UPDATE_MEMO_LISTS, UPDATE_MEMO } from '../constants/memo';
import storage from '../libs/storage';

function getMemoFromStorage() {
  return storage.getAllDataForKey('memo').then(ret => ret);
}

function updateMemo(state) {
  storage.save({
    key: 'memo',
    id: `${state.memoData.id}`,
    data: {
      id: `${state.memoData.id}`,
      text: state.memoData.text,
    },
  });
}

function* handleMemo() {
  while (yield take(UPDATE_MEMO)) {
    const state = yield select();
    yield updateMemo(state);
    const memoList = yield call(getMemoFromStorage);
    yield put({ type: UPDATE_MEMO_LISTS, memoList });
  }
}

function* initMemos() {
  while (yield take(INIT_MEMO_LISTS)) {
    const memoList = yield call(getMemoFromStorage);
    yield put({ type: UPDATE_MEMO_LISTS, memoList });
  }
}

function* dataSaga() {
  yield fork(initMemos);
  yield fork(handleMemo);
}

export default dataSaga;
