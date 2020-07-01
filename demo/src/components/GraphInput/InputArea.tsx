import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import theme from 'styled-theming';

const bgColor = theme('mode', {
  dark: lighten(0, '#282c34'),
});

const textColor = theme('mode', {
  dark: '#abb2bf',
});

const TextArea = styled.textarea`
  background-color: ${bgColor};
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
