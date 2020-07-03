import React, { useState } from 'react';
import styled from 'styled-components';
import UpdateButton from './UpdateButton';
import AutoUpdateSelector from './AutoUpdateSelector';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 45%;
    margin: 2px;
  }
`;

const UpdateArea = ({
  setAutoUpdate,
  update,
}: {
  setAutoUpdate: (autoUpdate: boolean) => void;
  update: () => void;
}) => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <AutoUpdateSelector
        active={active}
        onClick={() => {
          const autoUpdate = !active;
          setAutoUpdate(autoUpdate);
          setActive(autoUpdate);
        }}
      />
      <UpdateButton active={active} update={update} />
    </Container>
  );
};

export default UpdateArea;
