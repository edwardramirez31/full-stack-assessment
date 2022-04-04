import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';

interface Props {
  id: number;
  title: string;
  text: string;
}

const Item: React.VFC<Props> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="question-item">
      <div
        role="button"
        tabIndex={0}
        className="flex justify-between items-center question-title hover:text-selected"
        onClick={(): void => setIsOpen((prevState) => !prevState)}
        onKeyPress={(): void => {}}
      >
        <h2 className={`${isOpen ? 'text-selected' : ''}`}>{title}</h2>
        <div className={`${isOpen ? 'text-selected' : ''}`}>
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <p className="question-text">
          <ReactMarkdown>{text}</ReactMarkdown>
        </p>
      )}
    </div>
  );
};

export default Item;
