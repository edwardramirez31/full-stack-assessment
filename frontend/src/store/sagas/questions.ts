/* eslint-disable no-console */
import { all, takeEvery } from 'redux-saga/effects';

import { getQuestions } from 'store/slices/questions';

function* getQuestionSaga(): Generator {
  try {
    yield 1;
    console.log('Running');
  } catch (err) {
    console.log(err);
  }
}

export default function* tasksSaga(): Generator {
  try {
    yield all([takeEvery(getQuestions, getQuestionSaga)]);
  } catch (error) {
    console.log(error);
  }
}
