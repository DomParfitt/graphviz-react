import * as React from 'react';
import { GraphvizOptions } from 'd3-graphviz';
export declare class Graphviz extends React.Component<IGraphvizProps, any> {
    private static count;
    private static defaultOptions;
    private id;
    constructor(props: IGraphvizProps);
    render: () => JSX.Element;
    componentDidMount: () => void;
    componentDidUpdate: () => void;
    private renderGraph;
}
export interface IGraphvizProps extends React.ClassAttributes<Graphviz> {
    dot: string;
    options?: GraphvizOptions;
}
