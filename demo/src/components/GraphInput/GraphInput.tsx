import { read } from 'graphlib-dot';
import React, { useState } from 'react';
import styled from 'styled-components';
import examples from '../../examples';
import InputArea from './InputArea';
import ExampleSelector from './ExampleSelector';
import UpdateArea from './UpdateArea';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 100%;
    padding: 2px;
  }
`;

export interface GraphInputProps {
  initialDot?: string;
  onUpdate: (dot: string) => void;
}

export const GraphInput = ({ initialDot = '', onUpdate }: GraphInputProps) => {
  const [dot, setDot] = useState(initialDot);
  const [error, setError] = useState('');
  const [autoUpdate, setAutoUpdate] = useState(false);

  const updateDot = (newDot: string, updateGraph: boolean = true) => {
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
    <Container>
      <InputArea
        dot={dot}
        error={error}
        onChange={(newDot) => updateDot(newDot, autoUpdate)}
        onSubmit={() => updateDot(dot, true)}
      />
      <ExampleSelector
        examples={examples}
        onChange={(example) => updateDot(example)}
      />
      <UpdateArea
        update={() => updateDot(dot)}
        setAutoUpdate={(shouldAutoUpdate) => setAutoUpdate(shouldAutoUpdate)}
      />
    </Container>
  );
};
