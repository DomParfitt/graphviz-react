import { GraphvizOptions } from 'd3-graphviz';
import * as React from 'react';
declare class Graphviz extends React.Component<IGraphvizProps, any> {
    private static count;
    private static defaultOptions;
    private id;
    constructor(props: IGraphvizProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private loadGraph;
    private options;
}
export interface IGraphvizProps extends React.ClassAttributes<Graphviz> {
    dot: string;
    options?: GraphvizOptions;
}
export default Graphviz;
