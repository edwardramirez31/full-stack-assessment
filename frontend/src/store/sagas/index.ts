import { all, fork } from 'redux-saga/effects';

import questionsSaga from './questions';

export default function* rootSaga(): Generator {
  try {
    yield all([fork(questionsSaga)]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
