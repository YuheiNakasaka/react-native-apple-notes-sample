import { select, take } from 'redux-saga/effects';
import { UPDATE_MEMO } from '../constants/memo';
import storage from '../libs/storage';

function* handleMemo() {
  storage.getAllDataForKey('memo').then((ret) => {
    console.log(ret);
  }).catch((err) => {
    console.log(err);
  });
  while (yield take(UPDATE_MEMO)) {
    const state = yield select();
    console.log(state.memoData);
    // storage.save({
    //   key: 'memo',
    //   id: `${state.memoData.id}`,
    //   data: {
    //     text: state.memoData.text,
    //   },
    // });
  }
}

function* dataSaga() {
  yield handleMemo();
}

export default dataSaga;
