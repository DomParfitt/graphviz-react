import React from "react";
import { FormControl, FormCheck, FormLabel, Row, Col } from "react-bootstrap";

export class Option extends React.Component<OptionProps, any> {

  public render() {
    return (
      <Row>
        <Col >
          <FormLabel>{this.props.name}</FormLabel>
        </Col>
        <Col>
          {this.getInputElement()}
        </Col>
      </Row>
    );
  }

  private getInputElement = () => {
    switch (this.props.type) {
      case 'boolean':
        return (
          <FormCheck
            defaultChecked={this.props.default}
            onChange={
              (event: any) => this.props.onOptionUpdate(this.props.name, event.target.checked)
            }
          />
        );
      case 'number':
      case 'input':
        return (
          <FormControl
            size='sm'
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
          <FormControl
            size='sm'
            as="select"
            defaultValue={this.props.default}
            onChange={(event: any) => this.props.onOptionUpdate(this.props.name, event.target.value)}>
            {opts}
          </FormControl>
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