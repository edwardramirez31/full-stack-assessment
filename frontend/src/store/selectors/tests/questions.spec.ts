import {
  MOCKED_QUESTIONS,
  MOCKED_ERROR,
  MOCKED_INITIAL_STATE,
  MOCKED_INITIAL_STATE_LOADING,
  MOCKED_INITIAL_STATE_WITH_ERROR,
  MOCKED_INITIAL_STATE_WITH_ITEMS,
} from '../../../mock_data/index';

import type { RootState } from '@store/index';
import { getQuestions, getQuestionsLoading, getQuestionsError } from '@store/selectors/questions';
import type { initialState } from '@store/slices/questions';

const buildState = ({ items, error, loading }: typeof initialState): RootState => ({
  questions: {
    items,
    error,
    loading,
  },
});

describe('Testing getQuestions selector', () => {
  it('Should return items', () => {
    const state = buildState(MOCKED_INITIAL_STATE_WITH_ITEMS);
    const result = getQuestions(state);
    expect(result).toEqual(MOCKED_QUESTIONS);
  });

  it('Should return empty array', () => {
    const state = buildState(MOCKED_INITIAL_STATE_WITH_ERROR);
    const result = getQuestions(state);
    expect(result).toEqual([]);
  });
});

describe('Testing getQuestionsLoading selector', () => {
  it('Should return true', () => {
    const state = buildState(MOCKED_INITIAL_STATE_LOADING);
    const result = getQuestionsLoading(state);
    expect(result).toBe(true);
  });

  it('Should return false', () => {
    const state = buildState(MOCKED_INITIAL_STATE_WITH_ERROR);
    const result = getQuestionsLoading(state);
    expect(result).toBe(false);
  });
});

describe('Testing getQuestionsError selector', () => {
  it('Should get error', () => {
    const state = buildState(MOCKED_INITIAL_STATE_WITH_ERROR);
    const result = getQuestionsError(state);
    expect(result).toBe(MOCKED_ERROR);
  });

  it('Should return NULL', () => {
    const state = buildState(MOCKED_INITIAL_STATE);
    const result = getQuestionsError(state);
    expect(result).toBe(null);
  });
});
