import React from "react";
import { Option } from "./Option";
import { Table, FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/FormGroup";

export class OptionsSelector extends React.Component<OptionsSelectorProps, any> {

  public render() {
    const items: JSX.Element[] = [];
    this.props.options.forEach((option, index) => {

      items.push(
        <Option
          index={index}
          key={index}
          name={option.name}
          type={option.type}
          values={option.values}
          default={option.default}
          onOptionUpdate={this.props.onOptionUpdate} />
      );
    });

    return (
      <Table bordered size='sm'
        className="options-selector">
        <Form>
          <FormGroup>
            {items}
          </FormGroup>
        </Form>
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