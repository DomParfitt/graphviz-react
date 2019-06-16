var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { graphviz } from 'd3-graphviz';
import * as React from 'react';
var Graphviz = (function (_super) {
    __extends(Graphviz, _super);
    function Graphviz(props) {
        var _this = _super.call(this, props) || this;
        _this.id = "graphviz" + Graphviz.count;
        Graphviz.count++;
        return _this;
    }
    Graphviz.prototype.render = function () {
        return (React.createElement("div", { id: this.id }));
    };
    Graphviz.prototype.componentDidMount = function () {
        this.renderGraph();
    };
    Graphviz.prototype.componentDidUpdate = function () {
        this.renderGraph();
    };
    Graphviz.prototype.renderGraph = function () {
        graphviz('#' + this.id)
            .options(this.options())
            .renderDot(this.props.dot);
    };
    Graphviz.prototype.options = function () {
        if (!this.props.options) {
            return Graphviz.defaultOptions;
        }
        var options = Graphviz.defaultOptions;
        for (var _i = 0, _a = Object.keys(this.props.options); _i < _a.length; _i++) {
            var option = _a[_i];
            options[option] = this.props.options[option];
        }
        return options;
    };
    Graphviz.count = 0;
    Graphviz.defaultOptions = {
        fit: true,
        height: 500,
        width: 500,
        zoom: false,
    };
    return Graphviz;
}(React.Component));
export { Graphviz };
//# sourceMappingURL=Graphviz.js.map