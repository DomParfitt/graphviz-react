import React from 'react';
import { OptionValue } from './types';

const style: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
};

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
          style={style}
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
          style={style}
          type="checkbox"
          defaultChecked={value}
          onChange={(event) => onChange(event.target.checked)}
        />
      );
    case 'string':
      if (!allowedValues) {
        return (
          <input
            style={style}
            type="input"
            defaultValue={value}
            onChange={(event) => onChange(event.target.value)}
          />
        );
      }

      return (
        <select
          style={style}
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
