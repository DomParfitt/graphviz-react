import React from "react";

export class Option extends React.Component<OptionProps, any> {

    public render() {
        return (
            <tr >
                <td>{this.props.name}</td>
                <td>
                    {this.getInputElement()}
                </td>
            </tr>
        );
    }

    private getInputElement = () => {
        switch (this.props.type) {
            case 'boolean':
            case 'number':
            case 'input':
                return <input
                    type={this.props.type === 'boolean' ? 'checkbox' : this.props.type}
                    onChange={this.getOnUpdate()} />;
            case 'list':
                const opts: JSX.Element[] = [];
                (this.props.values || []).forEach((value, index) => {
                    opts.push(
                        <option key={index} value={value}>{value}</option>
                    );
                });
                //@ts-ignore
                return <select onChange={this.getOnUpdate()}>{opts}</select>
            default:
                return <div />
        }
    }

    private getOnUpdate = () => {
        if (this.props.type === 'boolean') {
            return (event: React.ChangeEvent<HTMLInputElement>) => this.props.onOptionUpdate(this.props.name, event.target.checked);
        } else {
            return (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => this.props.onOptionUpdate(this.props.name, event.target.value);
        }
    }

}

export interface OptionProps {
    name: string,
    type: 'boolean' | 'number' | 'input' | 'list',
    values?: string[],
    default?: any,
    onOptionUpdate: (name: string, value: any) => void,
}