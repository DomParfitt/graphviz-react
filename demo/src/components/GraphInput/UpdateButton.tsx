import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 50%;
  }
`;

const Button = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#98c379' : '#be5046')};
  :focus {
    outline: none;
  }
`;

const Button2 = styled.button`
  background-color: ${lighten(0.5, '#282c34')};
  :hover:enabled {
    background-color: #61afef;
  }
  :focus {
    outline: none;
  }
`;

const UpdateButton = ({
  setAutoUpdate,
  update,
}: {
  setAutoUpdate: (autoUpdate: boolean) => void;
  update: () => void;
}) => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Button
        active={active}
        onClick={() => {
          const autoUpdate = !active;
          setAutoUpdate(autoUpdate);
          setActive(autoUpdate);
        }}
      >
        {`Auto-update: ${active ? 'On' : 'Off'}`}
      </Button>
      <Button2 onClick={update} disabled={active}>
        Update (Ctrl + Enter)
      </Button2>
    </Container>
  );
};

export default UpdateButton;
