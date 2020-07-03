import React from 'react';
import styled from 'styled-components';
import { getProperty } from '../themes';

const background = getProperty('backgroundColor');

const Container = styled.div`
  background-color: ${background};
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

interface GridProps {
  columns?: number;
}

const Grid = ({
  children,
  columns = React.Children.count(children),
}: GridProps & { children: React.ReactNode }) => (
  <Container>
    {React.Children.map(children, (child) => (
      <Item>{child}</Item>
    ))}
  </Container>
);

export default Grid;
