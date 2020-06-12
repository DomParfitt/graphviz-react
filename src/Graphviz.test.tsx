import { render } from '@testing-library/react';
import * as React from 'react';
import { Graphviz } from './Graphviz';

/**
 * Tests a given DOT string.
 * @param dot the DOT string to test.
 */
const test = (dot: string) => {
  describe(dot, () => {
    it('matches expected baseElement snapshot', () => {
      const { baseElement } = render(<Graphviz dot={dot} />);
      expect(baseElement).toMatchSnapshot();
    });

    it('matches expected container snapshot', () => {
      const { container } = render(<Graphviz dot={dot} />);
      expect(container).toMatchSnapshot();
    });
  });
};

describe('<Graphviz />', () => {
  beforeAll(() => {
    // Mock out the `getTotalLength` method for SVG as this is not currently implemented by JSDOM.
    // See: https://github.com/jsdom/jsdom/issues/1330 & https://github.com/jsdom/jsdom/issues/1423
    // @ts-ignore
    SVGElement.prototype.getTotalLength = jest.fn();
  });

  test('graph { a -- b }');
  test('digraph { a -> b }');
});
