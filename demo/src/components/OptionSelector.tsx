import React from "react";

export class OptionsSelector extends React.Component<OptionsSelectorProps, any> {

    public render() {
        const items: JSX.Element[] = [];
        this.props.options.forEach((option, index) => {
            let input: JSX.Element =
                <input
                    key={index}
                    type="checkbox"
                    onChange={(event) => this.props.onOptionUpdate(option.name, event.target.checked)}
                />;

            switch (option.type) {
                case 'number':
                    input =
                        <input
                            key={index}
                            type="number"
                            onChange={(event) => this.props.onOptionUpdate(option.name, event.target.value)}
                        />;
                    break;
                case 'input':
                    input =
                        <input
                            key={index}
                            type="input"
                            onChange={(event) => this.props.onOptionUpdate(option.name, event.target.value)}
                        />;
                    break;
                case 'list':
                    const opts: JSX.Element[] = [];
                    option.values!.forEach((value, index) => {
                        opts.push(
                            <option key={index} value={value}>{value}</option>
                        );
                    });
                    input = <select
                        key={index}
                        onChange={(event) => this.props.onOptionUpdate(option.name, event.target.value)}>
                        {opts}</select>
                    break;
                default:
                    break;
            }

            items.push(
                <tr key={index}>
                    <td>{option.name}</td>
                    <td>
                        {input}
                    </td>
                </tr>
            );
        });
        return (
            <div>
                <table>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        );
    }
}

export interface OptionsSelectorProps {
    options: Option[],
    onOptionUpdate: (name: string, value: any) => void,
}

export interface Option {
    name: string,
    type: 'boolean' | 'number' | 'input' | 'list',
    values?: string[],
    default?: any,
}