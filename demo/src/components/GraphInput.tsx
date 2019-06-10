import React from "react";
import { read } from 'graphlib-dot';

export class GraphInput extends React.Component<GraphInputProps, GraphInputState> {

  constructor(props: any) {
    super(props);
    this.state = {
      autoUpdate: false,
      dot: this.props.initial || '',
      error: '',
      temp: this.props.initial || '',
    }
  }

  public render() {
    return (
      <div className="graph-input">
        <textarea defaultValue={this.state.dot} onChange={this.onChange} />
        <div style={{ color: 'red' }}>{this.state.error}</div>
        <label>Auto-update?</label>
        <input type='checkbox' onChange={
          (event) => {
            this.setState({ autoUpdate: event.target.checked });
          }
        } />
        <button onClick={this.onClick}>Update</button>
      </div>
    );
  }

  private onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ temp: event.target.value });
    if (this.state.autoUpdate) {
      this.updateGraph(event.target.value);
    }
  }

  private onClick = () => {
    this.updateGraph(this.state.temp);
  }

  private updateGraph = (dot: string) => {
    try {
      read(dot);
      this.props.onUpdate(dot);
      this.setState({
        error: ''
      })
    } catch (err) {
      this.setState({
        error: `Parse Error: ${err.message}`,
      });
    }
  }
}

interface GraphInputState {
  autoUpdate: boolean,
  dot: string,
  error: string,
  temp: string,
}

export interface GraphInputProps {
  initial?: string,
  onUpdate: (dot: string) => void,
}