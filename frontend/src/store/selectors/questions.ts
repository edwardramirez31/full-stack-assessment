import type { Question, ErrorObject } from '../types/models';
import type { Selector } from '../types/redux';

export const getQuestions: Selector<Question[]> = (state): Question[] => state.questions.items;

export const getQuestionsLoading: Selector<boolean> = (state): boolean => state.questions.loading;

export const getQuestionsError: Selector<ErrorObject | null> = (state): ErrorObject | null =>
  state.questions.error;
