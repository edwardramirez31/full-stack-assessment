/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MOCKED_QUESTIONS,
  MOCKED_INITIAL_STATE,
  MOCKED_INITIAL_STATE_LOADING,
} from '../../mock_data/index';
import type { RootState } from '../../store/index';
import { getQuestions } from '../../store/slices/questions';
import Questions from '../Questions';

jest.mock('react-redux');

jest.mock(
  'react-markdown',
  () =>
    // eslint-disable-next-line react/display-name
    (props: {
      children:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    }): JSX.Element =>
      (
        // eslint-disable-next-line react/destructuring-assignment
        <>{props.children}</>
      )
);

describe('Form component', () => {
  const mockedUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>;
  const mockedUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;

  const dispatchSpy = jest.fn();
  mockedUseDispatch.mockImplementation(() => dispatchSpy);

  let state: RootState = { questions: { items: [], loading: false, error: null } };

  beforeEach(() => {
    mockedUseDispatch.mockClear();
    dispatchSpy.mockClear();
    state = {
      ...state,
      questions: {
        ...state.questions,
        items: MOCKED_QUESTIONS,
      },
    };
    mockedUseSelector.mockClear();
    mockedUseSelector.mockImplementation((fn) => fn(state));
  });

  it('should render three questions', () => {
    render(<Questions />);
    const items = screen.getAllByText(/MOCKED TITLE *\d*/);
    expect(items).toHaveLength(3);
  });

  it('should dispatch getQuestions on page first load', () => {
    state = {
      ...state,
      questions: {
        ...MOCKED_INITIAL_STATE,
      },
    };
    render(<Questions />);
    const items = screen.queryAllByText(/MOCKED TITILE *\d*/);
    expect(items).toHaveLength(0);
    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(getQuestions());
  });

  it('should render loading spinner while fetching data', () => {
    state = {
      ...state,
      questions: {
        ...MOCKED_INITIAL_STATE_LOADING,
      },
    };
    render(<Questions />);
    const item = screen.getByTestId('loading-spinner');
    expect(item).toBeInTheDocument();
  });
});
