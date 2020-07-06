import React from 'react';
import styled from 'styled-components';
import { getThemeProperties } from '../../../themes';

const path = ['graphInput', 'autoUpdate'];
const { backgroundColor } = getThemeProperties(path);
const { backgroundColor: inactiveBackgroundColor } = getThemeProperties([
  ...path,
  'inactive',
]);

const Button = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? backgroundColor : inactiveBackgroundColor};
  :focus {
    outline: none;
  }
`;

const AutoUpdateSelector = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => (
  <Button active={active} onClick={onClick}>
    {' '}
    {`Auto-update: ${active ? 'On' : 'Off'}`}
  </Button>
);

export default AutoUpdateSelector;
