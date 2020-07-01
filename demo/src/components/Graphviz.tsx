import { Graphviz } from 'graphviz-react';
import styled from 'styled-components';
import theme from 'styled-theming';

const bgColor = theme('mode', {
  dark: '#4b5263',
});

export default styled(Graphviz)`
  border: 2px solid black;
  background-color: ${bgColor};
  fill: ${bgColor};
  .graph {
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

    > polygon {
      fill: ${bgColor};
    }
  }
`;
