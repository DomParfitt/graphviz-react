import React from "react";
import { Option } from "./Option";

export class OptionsSelector extends React.Component<OptionsSelectorProps, any> {

  public render() {
    const items: JSX.Element[] = [];
    this.props.options.forEach((option, index) => {

      items.push(
        <Option
          key={index}
          name={option.name}
          type={option.type}
          values={option.values}
          default={option.default}
          onOptionUpdate={this.props.onOptionUpdate} />
      );
    });

    return (
      <table>
        <tbody>
          {items}
        </tbody>
      </table>
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