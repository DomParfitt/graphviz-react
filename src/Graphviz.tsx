import * as React from 'react';
import { graphviz, GraphvizOptions } from 'd3-graphviz';

export class Graphviz extends React.Component<IGraphvizProps, any> {
  private static count = 0;

  private static defaultOptions: GraphvizOptions = {
    fit: true,
    height: 500,
    width: 500,
    zoom: false,
  };

  private id: string;

  constructor(props: IGraphvizProps) {
    super(props);
    this.id = `graphviz${Graphviz.count}`;
    Graphviz.count += 1;
  }

  public render = (): JSX.Element => {
    const { className } = this.props;
    return (
      <div className={className} id={this.id} />
    );
  };

  public componentDidMount = () => {
    this.renderGraph();
  };

  public componentDidUpdate = () => {
    this.renderGraph();
  };

  private renderGraph = () => {
    const { dot, options } = this.props;
    graphviz(`#${this.id}`)
      .options({
        ...Graphviz.defaultOptions,
        ...options || {},
      })
      .renderDot(dot);
  };
}

export interface IGraphvizProps extends React.ClassAttributes<Graphviz> {
  dot: string;
  options?: GraphvizOptions;
  className?: string;
}
