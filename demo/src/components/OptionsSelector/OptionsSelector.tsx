import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import OptionInput from './OptionInput';
import { OptionValue, OptionsType } from './types';

const Container = styled.div`
  border-color: black;
  border-style: solid;
  border-width: 1px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Item = styled.div`
  background-color: #282c34;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  color: #abb2bf;
  padding: 10px;
  text-align: center;
`;

export interface OptionsSelectorProps<T extends OptionsType> {
  options: T;
  allowedValues?: { [K in keyof T]: string[] };
  onChange: (name: keyof T, value: OptionValue) => void;
}

export const OptionsSelector = <T extends OptionsType>({
  options,
  allowedValues,
  onChange,
}: OptionsSelectorProps<T>) => (
  <Container>
    {Object.entries(options).map(([key, value]) => (
      <>
        <Item>
          {key
            .split('')
            .map((char) => (/[A-Z]/.test(char) ? ` ${char}` : char))
            .map((char, index) => (index === 0 ? char.toUpperCase() : char))
            .join('')}
        </Item>
        <Item>
          <OptionInput
            value={value}
            allowedValues={allowedValues ? allowedValues[key] : undefined}
            onChange={(newValue) => onChange(key, newValue)}
          />
        </Item>
      </>
    ))}
  </Container>
);
