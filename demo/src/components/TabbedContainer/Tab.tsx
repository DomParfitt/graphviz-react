import React from 'react';
import styled from 'styled-components';
import { getThemeProperty } from '../../themes';

const path = (active: boolean) => [
  'tabContainer',
  ...(!active ? ['inactiveTabs'] : []),
];

const background = (active: boolean) =>
  getThemeProperty('backgroundColor', path(active));

const textColor = (active: boolean) =>
  getThemeProperty('textColor', path(active));

const Button = styled.button<{ active: boolean }>`
  border: none;
  color: ${(props) => textColor(props.active)};
  background-color: ${(props) => background(props.active)};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  :hover {
    background-color: ${getThemeProperty('hoverColor', ['tabContainer'])};
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
