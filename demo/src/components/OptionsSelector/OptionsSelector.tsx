import React from 'react';
import OptionInput from './OptionInput';
import { child, parent } from './styles';
import { OptionValue, OptionsType } from './types';

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
  <div style={parent}>
    {Object.entries(options).map(([key, value]) => (
      <>
        <div style={child}>
          {key
            .split('')
            .map((char) => (/[A-Z]/.test(char) ? ` ${char}` : char))
            .map((char, index) => (index === 0 ? char.toUpperCase() : char))
            .join('')}
        </div>
        <div style={{ ...child, textAlign: 'center' }}>
          <OptionInput
            value={value}
            allowedValues={allowedValues ? allowedValues[key] : undefined}
            onChange={(newValue) => onChange(key, newValue)}
          />
        </div>
      </>
    ))}
  </div>
);
