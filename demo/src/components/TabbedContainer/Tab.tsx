import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const tabBg = theme('mode', {
  light: 'darkgrey',
});

const tabBgHovered = theme('mode', {
  light: 'pink',
});

const tabBgActive = theme('mode', {
  light: 'grey',
});

const textColor = theme('mode', {
  light: 'black',
});

const Button = styled.button<{ active: boolean }>`
  border: none;
  flex-grow: 1;
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
