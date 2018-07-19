import React from 'react';
import PropTypes from 'prop-types';

export class Person extends React.Component {
    render() {
        return (
            <div className="person--container">
                {this.props.persons.map((field) => {
                    return <div className="person--fullName">
                        <span className="firstName">{field.firstName}</span>
                        <span className="secondName"> {field.secondName}</span>
                        <span className="lastName"> {field.lastName}</span>
                    </div>
                })}
            </div>
        );
    }
}

export class PersonWithHeadline extends React.Component {
    render() {
        return (
            <div className="person--container">
                <div className="person--headline">
                    {this.props.headline}
                </div>
                {this.props.persons.map((field) => {
                    return <div className="person--fullName">
                        <span className="firstName">{field.firstName}</span>
                        <span className="secondName"> {field.secondName}</span>
                        <span className="lastName"> {field.lastName}</span>
                    </div>
                })}
            </div>
        );
    }
}

export class PersonWithHeadlineAndMail extends React.Component {
    render() {
        return (
            <div className="person--container">
                <div className="person--headline">
                    {this.props.headline}
                </div>
                {this.props.persons.map((field) => {
                    return <div className="person--fullName">
                        <span className="firstName">{field.firstName}</span>
                        <span className="secondName"> {field.secondName}</span>
                        <span className="lastName"> {field.lastName}</span>
                        <span className="mail"><a href={'mailto:' + field.mail}>{field.mail}</a></span>
                    </div>
                })}
            </div>
        );
    }
}

Person.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            secondName: PropTypes.string,
            lastName: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

PersonWithHeadline.propTypes = {
    headline: PropTypes.string.isRequired,
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            secondName: PropTypes.string,
            lastName: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

PersonWithHeadlineAndMail.propTypes = {
    headline: PropTypes.string.isRequired,
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            secondName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
            mail: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}