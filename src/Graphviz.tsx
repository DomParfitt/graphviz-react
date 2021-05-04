import * as React from 'react';
import { graphviz, GraphvizOptions } from 'd3-graphviz';

interface IGraphvizProps {
  /**
   * A string containing a graph representation using the Graphviz DOT language.
   * @see https://graphviz.org/doc/info/lang.html
   */
  dot: string;
  /**
   * Options to pass to the Graphviz renderer.
   */
  options?: GraphvizOptions;
  /**
   * The classname to attach to this component for styling purposes.
   */
  className?: string;
}
class Graphviz extends React.Component<IGraphvizProps, any> {
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

    if (!options?.zoom) {
      document.querySelector(`#${this.id}`)?.childNodes.forEach((child) => child.remove());
    }

    graphviz(`#${this.id}`)
      .options({
        ...Graphviz.defaultOptions,
        ...options || {},
      })
      .renderDot(dot);
  };
}

export { Graphviz, IGraphvizProps };
export default Graphviz;
