import React from 'react';
import PropTypes from 'prop-types';

export class InputWithHeadline extends React.Component {
    render() {
        return (
            <div className="form--element">
                {this.props.fields.map((field) => {
                    return <div className="input--container">
                        <div className="input--container--headline">
                            <label for={field.id}>{field.headline}</label>
                        </div>
                        <div className="input--container--field">
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={field.value}
                                placeholder={field.placeholder}
                            />
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

export class Input extends React.Component {
    render() {
        return (
            <div className="form--element">
                {this.props.fields.map((field) => {
                    return <div className="input--container">
                        <div className="input--container--field">
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={field.value}
                                placeholder={field.placeholder}
                            />
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

export class Textarea extends React.Component {
    render() {
        return(
            <div className="form--element">
                <div className="textarea--element">
                    <textarea 
                        maxlength={this.props.maxlength} 
                        name={this.props.name} 
                        rows={this.props.rows} 
                        cols={this.props.cols} 
                        placeholder={this.props.placeholder} 
                        required={this.props.required} 
                        autofocus={this.props.autofocus}
                    />
                </div>
            </div>
        );
    }
}

InputWithHeadline.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            headline: PropTypes.string,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            value: PropTypes.string,
            placeholder: PropTypes.string
        }).isRequired
    ).isRequired
}

Input.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            value: PropTypes.string,
            placeholder: PropTypes.string
        }).isRequired
    ).isRequired
}

Textarea.propTypes = {
    maxlength: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.string,
    cols: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    autofocus: PropTypes.bool,
}