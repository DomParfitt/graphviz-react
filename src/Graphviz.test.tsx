import * as React from 'react';
import { Graphviz } from './Graphviz';
import { render } from '@testing-library/react';

beforeAll(() => {
  // Mock out the `getTotalLength` method for SVG as this is not currently implemented by JSDOM.
  // See: https://github.com/jsdom/jsdom/issues/1330 & https://github.com/jsdom/jsdom/issues/1423
  // @ts-ignore
  SVGElement.prototype.getTotalLength = jest.fn();
})

describe('<Graphviz />', () => {
  it('matches expected snapshot', () => {
    const tree = render(<Graphviz dot={'graph { a -- b }'} />);
    expect(tree).toMatchSnapshot();
  });
});