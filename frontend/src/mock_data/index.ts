import type { initialState } from '@store/slices/questions';
import type { ErrorObject, Question } from '@store/types/models';

export const MOCKED_QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'MOCKED TITLE',
    text: 'MOCKED TEXT',
  },
  {
    id: 2,
    title: 'MOCKED TITLE 2',
    text: 'MOCKED TEXT 2',
  },
  {
    id: 3,
    title: 'MOCKED TITLE 3',
    text: 'MOCKED TEXT 3',
  },
];

export const MOCKED_ERROR: ErrorObject = {
  message: 'MOCKED ERROR MESSAGE',
  status: 400,
};

export const MOCKED_INITIAL_STATE: typeof initialState = {
  items: [],
  error: null,
  loading: false,
};

export const MOCKED_INITIAL_STATE_WITH_ITEMS: typeof initialState = {
  items: MOCKED_QUESTIONS,
  error: null,
  loading: false,
};

export const MOCKED_INITIAL_STATE_WITH_ERROR: typeof initialState = {
  error: MOCKED_ERROR,
  loading: false,
  items: [],
};

export const MOCKED_INITIAL_STATE_LOADING: typeof initialState = {
  items: [],
  error: null,
  loading: true,
};
