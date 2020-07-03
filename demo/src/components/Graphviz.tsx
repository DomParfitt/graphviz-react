import { Graphviz } from 'graphviz-react';
import styled from 'styled-components';
import { getProperty } from '../themes';

const path = ['graphArea'];
const background = getProperty('backgroundColor', path);

export default styled(Graphviz)`
  border: 2px solid black;
  background-color: ${background};
  fill: ${background};
  .graph {
    > polygon {
      fill: ${background};
    }

    /* 
      Below is an example of styling the graph with CSS but this will override
      any styles present in the DOT string so may not be preferable.
     */
    /* .node {
      > * {
        stroke: white;
      }

      > text {
        stroke: transparent;
      }
    }

    .edge {
      > * {
        stroke: white;
      }

      > polygon {
        fill: white;
      }
    }

    text {
      fill: white;
    } */
  }
`;
