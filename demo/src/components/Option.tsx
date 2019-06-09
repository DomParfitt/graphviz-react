import React from "react";

export class Option extends React.Component<OptionProps, any> {

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
            checked={this.props.default}
            onChange={
              (event) => this.props.onOptionUpdate(this.props.name, event.target.checked)
            } />
        );
      case 'number':
      case 'input':
        return (
          <input
            type={this.props.type}
            defaultValue={this.props.default}
            onChange={
              (event) => this.props.onOptionUpdate(this.props.name, event.target.value)
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
          <select
            defaultValue={this.props.default}
            onChange={(event) => this.props.onOptionUpdate(this.props.name, event.target.value)}>
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