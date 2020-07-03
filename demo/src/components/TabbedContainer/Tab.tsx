import React from 'react';
import styled from 'styled-components';
import { getThemeProperties } from '../../themes';

const {
  backgroundColor,
  textColor,
  hoverColor,
  hoverTextColor,
} = getThemeProperties(['tabContainer']);

// TODO: Refactor this to allow props
const {
  backgroundColor: inactiveBackgroundColor,
  textColor: inactiveTextColor,
} = getThemeProperties(['tabContainer', 'inactiveTabs']);

const Button = styled.button<{ active: boolean }>`
  border: none;
  color: ${(props) => (props.active ? textColor : inactiveTextColor)};
  background-color: ${(props) =>
    props.active ? backgroundColor : inactiveBackgroundColor};
  :hover {
    background-color: ${hoverColor};
    color: ${hoverTextColor};
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
