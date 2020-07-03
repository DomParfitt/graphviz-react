import React from 'react';
import styled from 'styled-components';
import { getThemeProperties } from '../../themes';

const path = ['graphInput', 'inputArea'];
const { backgroundColor, textColor } = getThemeProperties(path);

const TextArea = styled.textarea`
  background-color: ${backgroundColor};
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
  submit,
}: {
  dot: string;
  error?: string;
  onChange: (dot: string) => void;
  submit: () => void;
}) => (
  <>
    <TextArea
      rows={25}
      value={dot}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => {
        if (event.ctrlKey && event.keyCode === 13) {
          submit();
        }
      }}
    />
    <Error>{error}</Error>
  </>
);

export default InputArea;
