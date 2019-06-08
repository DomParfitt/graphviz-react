import React from 'react';
import './App.css';
import { read } from 'graphlib-dot';

import { Graphviz } from 'graphviz-react';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      dot: 'graph { a }',
      error: '',
      temp: ''
    };
    
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div>
          <textarea placeholder={this.state.dot} onChange={(event) => {
            this.setState({ temp: event.target.value });
          }} />
        </div>
        <div style={{ color: 'red' }}>{this.state.error}</div>
        <button onClick={() => {
          try {
            read(this.state.temp);
            this.setState({
              dot: this.state.temp,
              error: ''
            })
          } catch (err) {
            this.setState({
              error: `Parse Error: ${err.message}`,
            });
          }
        }}>Update</button>
        <Graphviz dot={this.state.dot} />
      </div>
    );
  }
}

export default App;
