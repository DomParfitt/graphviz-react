import React from 'react';
// import './App.css';


import { Graphviz } from 'graphviz-react';
import { OptionSelector } from './components/OptionSelector';
import { GraphInput } from './components/GraphInput';

export default class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      dot: 'graph { a }',
      graphOptions: {},
    };
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Graphviz-React</h1>
        <table>
          <tr>
            <td>
              <GraphInput initial={this.state.dot} onUpdate={(dot) => this.setState({dot})} />
              <OptionSelector />
            </td>
            <td>
              <Graphviz dot={this.state.dot} options={this.state.graphOptions}/>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

interface AppState {
  dot: string,
  graphOptions: any,
}