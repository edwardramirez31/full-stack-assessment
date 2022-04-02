import { MOCKED_QUESTIONS, MOCKED_ERROR } from '../../../mock_data/index';

import reducer, {
  initialState,
  getQuestions,
  getQuestionsSuccess,
  getQuestionsError,
} from '@store/slices/questions';

describe('Testing auth reducer', () => {
  type SliceState = typeof initialState;
  let previousState: SliceState;
  beforeEach(() => {
    previousState = {
      ...initialState,
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle a user trying to fetch data', () => {
    expect(reducer(previousState, getQuestions())).toEqual({
      ...previousState,
      loading: true,
    });
  });

  it('should handle a successful fetch request ', () => {
    const result = reducer(previousState, getQuestionsSuccess(MOCKED_QUESTIONS));
    expect(result).toEqual({
      ...previousState,
      items: MOCKED_QUESTIONS,
      loading: false,
    });
  });

  it('should handle a fetch request failure', () => {
    const result = reducer(previousState, getQuestionsError(MOCKED_ERROR));
    expect(result).toEqual({
      ...previousState,
      error: MOCKED_ERROR,
      loading: false,
    });
  });
});
