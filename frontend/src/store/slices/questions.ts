import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { Question, ErrorObject } from '../types/models';

interface InitialState {
  items: Question[];
  loading: boolean;
  error: ErrorObject | null;
}

export const initialState: InitialState = {
  items: [],
  loading: false,
  error: null,
};

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    getQuestions: (state) => {
      state.loading = true;
    },
    getQuestionsSuccess: (state, action: PayloadAction<Question[]>) => {
      state.items = [...state.items, ...action.payload];
      state.loading = false;
    },
    getQuestionsError: (state, action: PayloadAction<ErrorObject>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getQuestions, getQuestionsSuccess, getQuestionsError } = questionSlice.actions;

export default questionSlice.reducer;
