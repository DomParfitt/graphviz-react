import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { lighten } from 'polished';

const tabBgActive = theme('mode', {
  dark: lighten(0.25, '#282c34'),
});

const tabBgHovered = theme('mode', {
  dark: '#61afef',
});

const tabBg = theme('mode', {
  dark: lighten(0.4, '#282c34'),
});

const textColor = theme('mode', {
  dark: 'black',
});

const Button = styled.button<{ active: boolean }>`
  border: none;
  color: ${textColor};
  background-color: ${(props) => (props.active ? tabBgActive : tabBg)};
  :hover {
    background-color: ${tabBgHovered};
  }
  :focus {
    outline: none;
  }
`;

interface TabProps {
  active: boolean;
  label: string;
  onClick?: () => void;
}

const Tab = ({ active, label, onClick }: TabProps) => {
  return (
    <Button active={active} onClick={onClick}>
      {label}
    </Button>
  );
};

export default styled(Tab)``;
