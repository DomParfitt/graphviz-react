import * as React from 'react';
import { useEffect, useMemo } from 'react';
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
  /**
   * The callback function to call when the graph is rendered.
   */
  callback?: () => void;
}

const defaultOptions: GraphvizOptions = {
  fit: true,
  height: 500,
  width: 500,
  zoom: false,
};

let counter = 0;
// eslint-disable-next-line no-plusplus
const getId = () => `graphviz${counter++}`;

const Graphviz = ({ dot, className, options = {}, callback }: IGraphvizProps) => {
  const id = useMemo(getId, []);

  useEffect(() => {
    graphviz(`#${id}`, {
      ...defaultOptions,
      ...options,
    }).renderDot(dot, callback);
  }, [dot, options]);

  return <div className={className} id={id} />;
};

export { Graphviz, IGraphvizProps };
export default Graphviz;
