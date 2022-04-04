import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';

import { getQuestions, getQuestionsError, getQuestionsLoading } from '@store/selectors/questions';
import { getQuestions as getQuestionsAction } from '@store/slices/questions';
import SPINNER from 'assets/icons';

const Questions: React.VFC = () => {
  const dispatch = useDispatch();
  const questions = useSelector(getQuestions);
  const loading = useSelector(getQuestionsLoading);
  const error = useSelector(getQuestionsError);

  useEffect(() => {
    if (!questions.length && error == null) {
      dispatch(getQuestionsAction());
    }
  }, [dispatch, error, questions.length]);

  if (loading) {
    return (
      <div data-testid="loading-spinner" className="flex justify-center">
        {SPINNER}
      </div>
    );
  }

  if (error != null) {
    return (
      <div>
        <h1>Something went wrong:</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1" />
      <div className="col-span-2">
        {questions.map(({ id, title, text }) => (
          <Item key={id} id={id} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
