import { Graphviz } from 'graphviz-react';
import styled from 'styled-components';

export default styled(Graphviz)`
  border: 1px solid black;
  background-color: grey;
  fill: grey;
  .graph > polygon {
    fill: grey;
  }
`;
