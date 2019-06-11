import React from "react";
import { Option } from "./Option";
import { Table } from "react-bootstrap";

export class OptionsSelector extends React.Component<OptionsSelectorProps, any> {

  public render() {
    const items: JSX.Element[] = [];
    this.props.options.forEach((option, index) => {

      items.push(
        <tr>
          <Option
            index={index}
            key={index}
            name={option.name}
            type={option.type}
            values={option.values}
            default={option.default}
            onOptionUpdate={this.props.onOptionUpdate} />
        </tr>
      );
    });

    return (
      <Table bordered striped size='sm'
        className="options-selector">
        <tbody>
          {items}
        </tbody>
      </Table>
    );
  }
}

export interface OptionsSelectorProps {
  options: IOption[],
  onOptionUpdate: (name: string, value: any) => void,
}

export interface IOption {
  name: string,
  type: 'boolean' | 'number' | 'input' | 'list',
  values?: string[],
  default?: any,
}