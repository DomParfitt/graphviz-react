import React from "react";
import { read } from 'graphlib-dot';

export class GraphInput extends React.Component<GraphInputProps, GraphInputState> {

  constructor(props: any) {
    super(props);
    this.state = {
      dot: this.props.initial || '',
      error: '',
      temp: '',
    }
  }

  public render() {
    return (
      <div>
        <textarea defaultValue={this.state.dot} onChange={(event) => {
          this.setState({ temp: event.target.value });
        }} />
        <div style={{ color: 'red' }}>{this.state.error}</div>
        <button onClick={this.onClick}>Update</button>
      </div>
    );
  }

  private onClick = () => {
    try {
      read(this.state.temp);
      this.props.onUpdate(this.state.temp);
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
  dot: string,
  error: string,
  temp: string,
}

export interface GraphInputProps {
  initial?: string,
  onUpdate: (dot: string) => void,
}