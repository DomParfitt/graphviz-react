import React from 'react';

const AutoUpdateSelector = ({
  onChange,
}: {
  onChange: (autoUpdate: boolean) => void;
}) => (
  <label>
    {'Auto-update? '}
    <input
      type="checkbox"
      onChange={(event) => onChange(event.target.checked)}
    />
  </label>
);

export default AutoUpdateSelector;
