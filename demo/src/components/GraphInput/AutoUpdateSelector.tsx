import React from 'react';
import { child } from './styles';

const AutoUpdateSelector = ({
  onChange,
}: {
  onChange: (autoUpdate: boolean) => void;
}) => (
  <label style={child}>
    {'Auto-update? '}
    <input
      type="checkbox"
      onChange={(event) => onChange(event.target.checked)}
    />
  </label>
);

export default AutoUpdateSelector;
