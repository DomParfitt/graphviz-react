import React from 'react';

import { Graphviz } from 'graphviz-react';
import { OptionsSelector, IOption } from './components/OptionSelector';
import { GraphInput } from './components/GraphInput';
import { GraphvizOptions } from 'd3-graphviz';

const defaults: GraphvizOptions = {
  height: 500,
  width: 500,
  fit: true,
  zoom: false,
  scale: 1,
  tweenPrecision: 1,
  engine: 'dot',
};

const options: IOption[] = [
  { name: 'useWorker', type: 'boolean' },
  { name: 'engine', type: 'list', values: ['circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork', 'twopi'], default: defaults.engine },
  // { name: 'totalMemory', type: 'number' },
  { name: 'keyMode', type: 'list', values: ['title', 'id', 'tag-index', 'index'] },
  { name: 'fade', type: 'boolean' },
  { name: 'tweenPaths', type: 'boolean' },
  { name: 'tweenShapes', type: 'boolean' },
  { name: 'convertEqualSidedPolygons', type: 'boolean' },
  { name: 'tweenPrecision', type: 'number', default: defaults.tweenPrecision },
  { name: 'growEnteringEdges', type: 'boolean' },
  { name: 'zoom', type: 'boolean', default: defaults.zoom },
  { name: 'width', type: 'number', default: defaults.width },
  { name: 'height', type: 'number', default: defaults.height },
  { name: 'scale', type: 'number', default: defaults.scale },
  { name: 'fit', type: 'boolean', default: defaults.fit },
];

export default class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      dot: 'graph { a }',
      graphOptions: defaults,
    };
  }

  public componentDidUpdate() {
    console.log(JSON.stringify(this.state.graphOptions));
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>Graphviz-React</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <GraphInput initial={this.state.dot} onUpdate={(dot) => this.setState({ dot })} />
                <OptionsSelector options={options} onOptionUpdate={this.onOptionUpdate} />
              </td>
              <td>
                <Graphviz dot={this.state.dot} options={this.state.graphOptions} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  private onOptionUpdate = (name: string, value: any) => {
    const graphOptions = { ...this.state.graphOptions };
    graphOptions[name] = value;
    this.setState({ graphOptions });
  }
}

interface AppState {
  dot: string,
  graphOptions: any,
}