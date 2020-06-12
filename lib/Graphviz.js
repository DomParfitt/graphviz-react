import * as React from 'react';
import { graphviz } from 'd3-graphviz';
export class Graphviz extends React.Component {
    constructor(props) {
        super(props);
        this.render = () => (React.createElement("div", { id: this.id }));
        this.componentDidMount = () => {
            this.appendWasmScript();
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
        this.appendWasmScript = () => {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@hpcc-js/wasm/dist/index.min.js";
            script.type = "application/javascript/";
            document.body.appendChild(script);
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