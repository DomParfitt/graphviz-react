import { read } from 'graphlib-dot';
import React, { useState } from 'react';
import examples from '../examples';

const parent: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
};

const child: React.CSSProperties = {
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '100%',
};

export interface GraphInputProps {
  initialDot?: string;
  onUpdate: (dot: string) => void;
}

export const GraphInput = ({ initialDot = '', onUpdate }: GraphInputProps) => {
  const [dot, setDot] = useState(initialDot);
  const [error, setError] = useState('');
  const [autoUpdate, setAutoUpdate] = useState(false);

  const updateDot = (newDot: string, updateGraph: boolean) => {
    setDot(newDot);
    if (updateGraph) {
      try {
        read(newDot);
        onUpdate(newDot);
        setError('');
      } catch (err) {
        setError(`Parse Error: ${err.message}`);
      }
    }
  };

  return (
    <div style={parent}>
      <InputArea
        dot={dot}
        error={error}
        onChange={(newDot) => updateDot(newDot, autoUpdate)}
      />
      <ExampleSelector onChange={(newDot) => updateDot(newDot, true)} />
      <AutoUpdateSelector
        onChange={(shouldAutoUpdate) => setAutoUpdate(shouldAutoUpdate)}
      />
      <button style={child} type="button" onClick={() => updateDot(dot, true)}>
        Update
      </button>
    </div>
  );
};

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

const ExampleSelector = ({ onChange }: { onChange: (dot: string) => void }) => (
  <select
    style={child}
    onChange={(event) => {
      if (event.target.value) {
        onChange(event.target.value);
      }
    }}
  >
    {Object.entries({ '--- Examples ---': '', ...examples }).map(
      ([key, value]) => (
        <option key={key} value={value}>
          {key
            .split('_')
            .map((_key) => `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`)
            .join(' ')}
        </option>
      )
    )}
  </select>
);

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
