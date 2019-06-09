import React from "react";

export class Option extends React.Component<OptionProps, any> {

  constructor(props: OptionProps) {
    super(props);
    this.state = {
      value: this.props.default
    };
  }

  public render() {
    return (
      <tr >
        <td>{this.props.name}</td>
        <td>
          {this.getInputElement()}
        </td>
      </tr>
    );
  }

  private getInputElement = () => {
    switch (this.props.type) {
      case 'boolean':
        return (
          <input
            type={'checkbox'}
            checked={this.state.value}
            onChange={
              (event) => {
                this.setState({ value: event.target.value });
                this.props.onOptionUpdate(this.props.name, event.target.checked)
              }
            } />
        );
      case 'number':
      case 'input':
        return (
          <input
            type={this.props.type}
            value={this.state.value}
            onChange={
              (event) => {
                this.setState({ value: event.target.value });
                this.props.onOptionUpdate(this.props.name, event.target.value)
              }
            } />
        );
      case 'list':
        const opts: JSX.Element[] = [];
        (this.props.values || []).forEach((value, index) => {
          opts.push(
            <option key={index} value={value}>{value}</option>
          );
        });
        return (
          <select onChange={(event) => this.props.onOptionUpdate(this.props.name, event.target.value)}>
            {opts}
          </select>
        );
      default:
        return <div />
    }
  }
}

export interface OptionProps {
  name: string,
  type: 'boolean' | 'number' | 'input' | 'list' | 'range',
  values?: string[],
  default?: any,
  onOptionUpdate: (name: string, value: any) => void,
}