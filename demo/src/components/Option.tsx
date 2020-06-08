import React from "react";

export class Option extends React.Component<OptionProps, any> {

  public render() {
    return (
      <tr>
        <td>
          <label>{
            this.props.name
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())
          }</label>
        </td>
        <td>
          {this.getinputElement()}
        </td>
      </tr>
    );
  }

  private getinputElement = () => {
    switch (this.props.type) {
      case 'boolean':
        return (
          <input
            type="checkbox"
            defaultChecked={this.props.default}
            onChange={
              (event: any) => this.props.onOptionUpdate(this.props.name, event.target.checked)
            }
          />
        );
      case 'number':
      case 'input':
        return (
          <input
            type={this.props.type}
            defaultValue={this.props.default}
            onChange={
              (event: any) => this.props.onOptionUpdate(this.props.name, event.target.value)
            }
          />
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
            onChange={(event: any) => this.props.onOptionUpdate(this.props.name, event.target.value)}>
            {opts}
          </select>
        );
      default:
        return <div />
    }
  }
}

export interface OptionProps {
  index: number,
  name: string,
  type: 'boolean' | 'number' | 'input' | 'list' | 'range',
  values?: string[],
  default?: any,
  onOptionUpdate: (name: string, value: any) => void,
}