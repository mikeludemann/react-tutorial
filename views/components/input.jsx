import React from 'react';

export class InputWithHeadline extends React.Component {
    render() {
        return (
            <div>
                <label for={this.props.form.id}>{this.props.form.title}
                    <input
                        type={this.props.form.type}
                        name={this.props.form.name}
                        id={this.props.form.id}
                        required={this.props.form.required} />
                </label>
            </div>
        );
    }
}