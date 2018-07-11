import React from 'react';
import PropTypes from 'prop-types';

export class InputWithHeadline extends React.Component {
    render() {
        return (
            <div className="form--container">
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

InputWithHeadline.propTypes = {
    id: PropTypes.string,
    headline: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string
};