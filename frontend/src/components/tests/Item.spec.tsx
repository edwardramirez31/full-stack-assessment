/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Item from '../Item';

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
  it('should render question title only at first render', () => {
    render(<Item id={1} title="MOCK TITLE" text="MOCK TEXT" />);
    expect(screen.getByText('MOCK TITLE')).toBeInTheDocument();
    expect(screen.queryByText('MOCK TEXT')).toBeNull();
  });

  it('should render question answer on button click', () => {
    render(<Item id={1} title="MOCK TITLE" text="MOCK TEXT" />);
    expect(screen.getByText('MOCK TITLE')).toBeInTheDocument();
    expect(screen.queryByText('MOCK TEXT')).toBeNull();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('MOCK TITLE')).toBeInTheDocument();
    expect(screen.getByText('MOCK TEXT')).toBeInTheDocument();
  });

  it('should hide question answer after second button click', () => {
    render(<Item id={1} title="MOCK TITLE" text="MOCK TEXT" />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('MOCK TITLE')).toBeInTheDocument();
    expect(screen.getByText('MOCK TEXT')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('MOCK TITLE')).toBeInTheDocument();
    expect(screen.queryByText('MOCK TEXT')).toBeNull();
  });
});
