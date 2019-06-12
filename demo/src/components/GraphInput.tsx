import React from "react";
import { read } from 'graphlib-dot';
import { examples } from "../examples/examples";
import { Row, Container } from "react-bootstrap";
import { TextArea } from "./styled/TextArea";
import { Select } from "./styled/Select";
import { Input } from "./styled/Input";
import { Button } from "./styled/Button";
import { Label } from "./styled/Label";

export class GraphInput extends React.Component<GraphInputProps, GraphInputState> {

  constructor(props: any) {
    super(props);
    this.state = {
      autoUpdate: false,
      dot: this.props.dot || '',
      error: '',
    }
  }

  public render() {
    const options: JSX.Element[] = [];
    options.push(
      <option key='0' value=''>--- Examples ---</option>
    );
    Object.entries(examples).forEach(([key, value], index) => {
      options.push(
        <option key={index + 1} value={value}>
          {
            key.split('_')
              .map((key) => key.charAt(0).toUpperCase() + key.slice(1))
              .join(' ')
          }
        </option>
      );
    });
    return (
      <Container fluid={true}>
        <Row>
          <TextArea
            rows={10}
            value={this.state.dot}
            onChange={this.onChange}
          />
          <div style={{ color: 'red' }}>{this.state.error}</div>
        </Row>
        <Row>
          <Select onChange={this.selectExample}>
            {options}
          </Select>
        </Row>
        <Row>
          <Label>Auto-update? &nbsp;</Label>
          <Input
            type="checkbox"
            onChange={
              (event: any) => {
                this.setState({ autoUpdate: event.target.checked });
              }
            }
          />
        </Row>
        <Row>
          <Button
            onClick={this.onClick}>Update</Button>
        </Row>
      </Container>
    );
  }

  private selectExample = (event: any) => {
    const dot = event.target.value;
    if (dot) {
      this.setState({ dot });
      this.updateGraph(dot);
    }
  }

  private onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const dot = event.target.value;
    this.setState({ dot });
    if (this.state.autoUpdate) {
      this.updateGraph(dot);
    }
  }

  private onClick = () => {
    this.updateGraph(this.state.dot);
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
}

export interface GraphInputProps {
  dot?: string,
  onUpdate: (dot: string) => void,
}