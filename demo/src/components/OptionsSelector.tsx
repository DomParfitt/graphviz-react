import React from 'react';

const parent: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
};

const child: React.CSSProperties = {
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '50%',
};

type OptionsType = { [key: string]: OptionValue };
type OptionValue = string | number | boolean;
export type Options<T> = T & OptionsType;

interface OptionsSelectorProps<T extends OptionsType> {
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
        <div style={child}>{key}</div>
        <OptionInput
          value={value}
          allowedValues={allowedValues ? allowedValues[key] : undefined}
          onChange={(newValue) => onChange(key, newValue)}
        />
      </>
    ))}
  </div>
);

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
          style={child}
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
          style={child}
          type="checkbox"
          defaultChecked={value}
          onChange={(event) => onChange(event.target.checked)}
        />
      );
    case 'string':
      if (!allowedValues) {
        return (
          <input
            style={child}
            type="input"
            defaultValue={value}
            onChange={(event) => onChange(event.target.value)}
          />
        );
      }

      return (
        <select
          style={child}
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
