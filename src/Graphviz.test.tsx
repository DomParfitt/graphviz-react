import * as React from 'react';
import { render } from '@testing-library/react';
import { Graphviz } from './Graphviz';

beforeAll(() => {
  // Mock out the `getTotalLength` method for SVG as this is not currently implemented by JSDOM.
  // See: https://github.com/jsdom/jsdom/issues/1330 & https://github.com/jsdom/jsdom/issues/1423
  // @ts-ignore
  SVGElement.prototype.getTotalLength = jest.fn();
});

describe('<Graphviz />', () => {
  it('matches expected snapshot', () => {
    const tree = render(<Graphviz dot={'graph { a -- b }'} />);
    expect(tree).toMatchSnapshot();
  });

  it('generates a unique id for each instance', () => {
    const first = <Graphviz className="foo" dot={'graph { a -- b }'} />;
    const second = <Graphviz className="foo" dot={'graph { c -- d }'} />;

    const { container } = render(
      <>
        {first}
        {second}
      </>
    );

    const ids = Array.from(container.getElementsByClassName('foo')).map(
      (el) => el.id
    );
    const idSet = new Set(ids);

    expect(ids.length).toBe(2);
    expect(ids.length).toEqual(idSet.size);
  });
});
