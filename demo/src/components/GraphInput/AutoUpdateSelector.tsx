import React from 'react';
import { child } from './styles';

const AutoUpdateSelector = ({
  onChange,
}: {
  onChange: (autoUpdate: boolean) => void;
}) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label style={child}>
    {'Auto-update? '}
    <input
      type="checkbox"
      onChange={(event) => onChange(event.target.checked)}
    />
  </label>
);

export default AutoUpdateSelector;
