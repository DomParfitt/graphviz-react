import React, { useState } from 'react';
import styled from 'styled-components';
import { getProperty } from '../../themes';

const path = ['graphInput', 'updateArea'];
const background = getProperty('backgroundColor', path);
const hover = getProperty('hoverColor', path);

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

const ToggleButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#98c379' : '#be5046')};
  :focus {
    outline: none;
  }
`;

const UpdateButton = styled.button`
  background-color: ${background};
  :hover:enabled {
    background-color: ${hover};
  }
  :focus {
    outline: none;
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
      <ToggleButton
        active={active}
        onClick={() => {
          const autoUpdate = !active;
          setAutoUpdate(autoUpdate);
          setActive(autoUpdate);
        }}
      >
        {`Auto-update: ${active ? 'On' : 'Off'}`}
      </ToggleButton>
      <UpdateButton onClick={update} disabled={active}>
        Update
        <br />
        <span style={{ fontSize: '10pt' }}>(Ctrl + Enter)</span>
      </UpdateButton>
    </Container>
  );
};

export default UpdateArea;
