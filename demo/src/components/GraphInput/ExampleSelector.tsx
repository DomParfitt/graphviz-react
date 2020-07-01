import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { lighten } from 'polished';

const backgroundColor = theme('mode', {
  dark: lighten(0, '#282c34'),
});

const textColor = theme('mode', {
  dark: '#abb2bf',
});

const Select = styled.select`
  background-color: ${backgroundColor};
  color: ${textColor};
  :focus {
    outline: none;
  }
`;

const ExampleSelector = ({
  examples,
  onChange,
}: {
  examples: { [key: string]: string };
  onChange: (dot: string) => void;
}) => (
  <Select
    onChange={(event) => {
      if (event.target.value) {
        onChange(event.target.value);
      }
    }}
  >
    {Object.entries({ '--- Examples ---': '', ...examples }).map(
      ([key, value]) => (
        <option key={key} value={value}>
          {key
            .split('_')
            .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
            .join(' ')}
        </option>
      )
    )}
  </Select>
);

export default ExampleSelector;
