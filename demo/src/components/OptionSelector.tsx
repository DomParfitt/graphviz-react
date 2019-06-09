import React from "react";

export class OptionsSelector extends React.Component<OptionsSelectorProps, any> {

    public render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>useWorker</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>engine</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>totalMemory</td>
                        <td><input type="number" /></td>
                    </tr>
                    <tr>
                        <td>keyMode</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>fade</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>tweenPaths</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>tweenShapes</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>convertEqualSidedPolygons</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>tweenPrecision</td>
                        <td><input type="number" /></td>
                    </tr>
                    <tr>
                        <td>growEnteringEdges</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>zoom</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>zoomScaleExtent</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>zoomTranslateExtent</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>width</td>
                        <td><input type="number" /></td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td><input type="number" /></td>
                    </tr>
                    <tr>
                        <td>scale</td>
                        <td><input type="number" /></td>
                    </tr>
                    <tr>
                        <td>fit</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export interface OptionsSelectorProps {
    onOptionUpdate: () => void,
}