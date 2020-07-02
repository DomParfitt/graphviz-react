import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { lighten } from 'polished';
import { OptionValue } from './types';

const backgroundColor = theme('mode', {
  dark: lighten(0.4, '#282c34'),
});

const Input = styled.input`
  width: 100%;
  text-align: center;
  background-color: ${backgroundColor};
`;

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
        <Input
          type="number"
          min={0}
          step={0}
          defaultValue={value.toString()}
          onChange={(event) =>
            onChange(Number.parseInt(event.target.value, 10))
          }
        />
      );
    case 'boolean':
      return (
        <Input
          type="checkbox"
          defaultChecked={value}
          onChange={(event) => onChange(event.target.checked)}
        />
      );
    case 'string':
      if (!allowedValues) {
        return (
          <Input
            type="input"
            defaultValue={value}
            onChange={(event) => onChange(event.target.value)}
          />
        );
      }

      return (
        <Input
          as="select"
          defaultValue={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onChange(event.target.value)
          }
        >
          {allowedValues.map((allowedValue) => (
            <option key={allowedValue} value={allowedValue}>
              {allowedValue}
            </option>
          ))}
        </Input>
      );
    default:
      return <></>;
  }
};

export default OptionInput;
