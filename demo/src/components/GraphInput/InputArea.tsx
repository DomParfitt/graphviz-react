import React from 'react';
import styled from 'styled-components';
import { getProperty } from '../../themes';

const path = ['graphInput', 'inputArea'];
const background = getProperty('backgroundColor', path);
const textColor = getProperty('textColor', path);

const TextArea = styled.textarea`
  background-color: ${background};
  color: ${textColor};
  resize: none;
  :focus {
    outline: none;
  }
`;

const Error = styled.div`
  color: red;
`;

const InputArea = ({
  dot,
  error = '',
  onChange,
  onSubmit,
}: {
  dot: string;
  error?: string;
  onChange: (dot: string) => void;
  onSubmit: () => void;
}) => (
  <>
    <TextArea
      rows={25}
      value={dot}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => {
        if (event.ctrlKey && event.keyCode === 13) {
          onSubmit();
        }
      }}
    />
    <Error>{error}</Error>
  </>
);

export default InputArea;
