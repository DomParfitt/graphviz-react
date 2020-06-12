import { render } from '@testing-library/react';
import * as React from 'react';
import { Graphviz } from './Graphviz';

// Mock out the `getTotalLength` method for SVG as this is not currently implemented by JSDOM.
// See: https://github.com/jsdom/jsdom/issues/1330 & https://github.com/jsdom/jsdom/issues/1423
// @ts-ignore
SVGElement.prototype.getTotalLength = jest.fn();

describe('<Graphviz />', () => {
  describe('graph { a -- b }', () => {
    const { baseElement, container } = render(<Graphviz dot={'graph { a -- b }'} />);

    it('matches expected baseElement snapshot', () => {
      expect(baseElement).toMatchSnapshot();
    });

    it('matches expected container snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
