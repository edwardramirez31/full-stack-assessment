/* eslint-disable no-console */
import type { CallEffect, PutEffect } from 'redux-saga/effects';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import { QuestionsAPI } from '@apis/index';
import type { ErrorObject, Question } from '@store/types/models';
import { getQuestions, getQuestionsError, getQuestionsSuccess } from 'store/slices/questions';

function* getQuestionSaga(): Generator<CallEffect<Question[]> | PutEffect, void, Question[]> {
  try {
    const tasks = yield call([QuestionsAPI, 'getQuestions']);
    yield put(getQuestionsSuccess(tasks));
  } catch (err) {
    const error = err as ErrorObject;
    yield put(getQuestionsError(error));
  }
}

export default function* tasksSaga(): Generator {
  try {
    yield all([takeEvery(getQuestions, getQuestionSaga)]);
  } catch (error) {
    console.log(error);
  }
}
