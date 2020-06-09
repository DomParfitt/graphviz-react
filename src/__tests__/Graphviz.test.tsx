import * as React from 'react';
import { Graphviz } from '../Graphviz';
import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';


describe('<Graphviz />', () => {
  it('matches expected snapshot', () => {
    // const tree = create(
    //   <Graphviz dot={'{a -- b}'} />
    // ).toJSON()
    const tree = render(<Graphviz dot={'graph { a -- b }'} />);
    // console.log(tree);
    // expect(tree).toMatchSnapshot();
  });
});