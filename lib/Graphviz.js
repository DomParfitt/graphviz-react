import { graphviz } from 'd3-graphviz';
import * as React from 'react';
export class Graphviz extends React.Component {
    constructor(props) {
        super(props);
        this.render = () => {
            return (React.createElement("div", { id: this.id }));
        };
        this.componentDidMount = () => {
            this.appendWasmScript();
            this.renderGraph();
        };
        this.componentDidUpdate = () => {
            this.renderGraph();
        };
        this.renderGraph = () => {
            graphviz('#' + this.id)
                .options(this.options())
                .renderDot(this.props.dot);
        };
        this.appendWasmScript = () => {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@hpcc-js/wasm/dist/index.min.js";
            script.type = "application/javascript/";
            document.body.appendChild(script);
        };
        this.options = () => {
            if (!this.props.options) {
                return Graphviz.defaultOptions;
            }
            const options = Graphviz.defaultOptions;
            for (const option of Object.keys(this.props.options)) {
                options[option] = this.props.options[option];
            }
            return options;
        };
        this.id = "graphviz" + Graphviz.count;
        Graphviz.count++;
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