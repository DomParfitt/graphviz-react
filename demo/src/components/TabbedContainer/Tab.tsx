import React from 'react';
import styled from 'styled-components';
import { getProperty } from '../../themes';

const path = (active: boolean) => [
  'tabContainer',
  ...(!active ? ['inactiveTabs'] : []),
];

const background = (active: boolean) =>
  getProperty('backgroundColor', path(active));

const textColor = (active: boolean) => getProperty('textColor', path(active));

const Button = styled.button<{ active: boolean }>`
  border: none;
  color: ${(props) => textColor(props.active)};
  background-color: ${(props) => background(props.active)};
  :hover {
    background-color: ${getProperty('hoverColor', ['tabContainer'])};
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
