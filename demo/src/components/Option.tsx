import React from "react";
import { Label } from "./styled/Label";
import { Input } from "./styled/Input";
import { Select } from "./styled/Select";
import { TableRow } from "./styled/TableRow";
import { TableData } from "./styled/TableData";

export class Option extends React.Component<OptionProps, any> {

  public render() {
    return (
      <TableRow>
        <TableData>
          <Label>{
            this.props.name
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())
          }</Label>
        </TableData>
        <TableData>
          {this.getInputElement()}
        </TableData>
      </TableRow>
    );
  }

  private getInputElement = () => {
    switch (this.props.type) {
      case 'boolean':
        return (
          <Input
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
          <Input
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
          <Select
            defaultValue={this.props.default}
            onChange={(event: any) => this.props.onOptionUpdate(this.props.name, event.target.value)}>
            {opts}
          </Select>
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