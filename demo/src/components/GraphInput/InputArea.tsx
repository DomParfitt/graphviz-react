import React from 'react';
import { child } from './styles';

const InputArea = ({
  dot,
  error,
  onChange,
}: {
  dot: string;
  error: string;
  onChange: (dot: string) => void;
}) => (
  <>
    <textarea
      style={child}
      rows={15}
      value={dot}
      onChange={(event) => onChange(event.target.value)}
    />
    <div style={{ ...child, color: 'red' }}>{error}</div>
  </>
);

export default InputArea;
