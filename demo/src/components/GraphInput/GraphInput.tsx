import { read } from 'graphlib-dot';
import React, { useState } from 'react';
import examples from '../../examples';
import InputArea from './InputArea';
import ExampleSelector from './ExampleSelector';
import AutoUpdateSelector from './AutoUpdateSelector';
import { child, parent } from './styles';

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
      <ExampleSelector
        examples={examples}
        onChange={(newDot) => updateDot(newDot, true)}
      />
      <AutoUpdateSelector
        onChange={(shouldAutoUpdate) => setAutoUpdate(shouldAutoUpdate)}
      />
      <button style={child} type="button" onClick={() => updateDot(dot, true)}>
        Update
      </button>
    </div>
  );
};
