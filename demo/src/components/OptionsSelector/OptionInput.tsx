import React from 'react';
import { OptionValue } from './types';

const OptionInput = ({
  value,
  allowedValues,
  onChange,
}: {
  value: OptionValue;
  allowedValues?: string[];
  onChange: (value: OptionValue) => void;
}) => {
  switch (typeof value) {
    case 'number':
      return (
        <input
          type="number"
          defaultValue={value.toString()}
          onChange={(event) =>
            onChange(Number.parseInt(event.target.value, 10))
          }
        />
      );
    case 'boolean':
      return (
        <input
          type="checkbox"
          defaultChecked={value}
          onChange={(event) => onChange(event.target.checked)}
        />
      );
    case 'string':
      if (!allowedValues) {
        return (
          <input
            type="input"
            defaultValue={value}
            onChange={(event) => onChange(event.target.value)}
          />
        );
      }

      return (
        <select
          // style={child}
          defaultValue={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {allowedValues.map((allowedValue) => (
            <option key={allowedValue} value={allowedValue}>
              {allowedValue}
            </option>
          ))}
        </select>
      );
    default:
      return <></>;
  }
};

export default OptionInput;
