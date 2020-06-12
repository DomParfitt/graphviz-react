import * as React from 'react';
import { graphviz } from 'd3-graphviz';
export class Graphviz extends React.Component {
    constructor(props) {
        super(props);
        this.render = () => (React.createElement("div", { id: this.id }));
        this.componentDidMount = () => {
            this.renderGraph();
        };
        this.componentDidUpdate = () => {
            this.renderGraph();
        };
        this.renderGraph = () => {
            const { dot, options } = this.props;
            graphviz(`#${this.id}`)
                .options(Object.assign(Object.assign({}, Graphviz.defaultOptions), options || {}))
                .renderDot(dot);
        };
        this.id = `graphviz${Graphviz.count}`;
        Graphviz.count += 1;
    }
}
Graphviz.count = 0;
Graphviz.defaultOptions = {
    fit: true,
    height: 500,
    width: 500,
    zoom: false,
};
//# sourceMappingURL=Graphviz.js.map