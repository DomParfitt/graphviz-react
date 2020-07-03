import React from 'react';
import styled from 'styled-components';
import { getProperty } from '../../themes';

const path = ['graphInput', 'exampleSelector'];
const background = getProperty('backgroundColor', path);
const textColor = getProperty('textColor', path);

const Select = styled.select`
  background-color: ${background};
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
