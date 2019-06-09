import React from 'react';
// import './App.css';


import { Graphviz } from 'graphviz-react';
import { OptionsSelector, IOption } from './components/OptionSelector';
import { GraphInput } from './components/GraphInput';

const options: IOption[] = [
  { name: 'useWorker', type: 'boolean' },
  { name: 'engine', type: 'list', values: ['circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork', 'twopi'] },
  { name: 'totalMemory', type: 'number' },
  { name: 'keyMode', type: 'list', values: ['title', 'id', 'tag-index', 'index'] },
  { name: 'fade', type: 'boolean' },
  { name: 'tweenPaths', type: 'boolean' },
  { name: 'tweenShapes', type: 'boolean' },
  { name: 'convertEqualSidedPolygons', type: 'boolean' },
  { name: 'tweenPrecision', type: 'number' },
  { name: 'growEnteringEdges', type: 'boolean' },
  { name: 'zoom', type: 'boolean' },
  { name: 'width', type: 'number' },
  { name: 'height', type: 'number' },
  { name: 'scale', type: 'number' },
  { name: 'fit', type: 'boolean' },
];

export default class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      dot: 'graph { a }',
      graphOptions: {},
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