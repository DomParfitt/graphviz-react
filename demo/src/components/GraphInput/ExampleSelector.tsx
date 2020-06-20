import React from 'react';
import { child } from './styles';

const ExampleSelector = ({
  examples,
  onChange,
}: {
  examples: { [key: string]: string };
  onChange: (dot: string) => void;
}) => (
  <select
    style={child}
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
            .map((_key) => `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`)
            .join(' ')}
        </option>
      )
    )}
  </select>
);

export default ExampleSelector;
