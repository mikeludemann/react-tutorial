import React from 'react';
import PropTypes from 'prop-types';

export class Contact extends React.Component {
    render() {
        return (
            <div className="contact--container">
                <div className="contact--information--person">
                    <span className="salutation">{this.props.salutation}</span>
                    <span className="title"> {this.props.title}</span>
                    <span className="fullName">
                        <span className="firstName">{this.props.firstName}</span>
                        <span className="secondName"> {this.props.secondName}</span>
                        <span className="lastName"> {this.props.lastName}</span>
                    </span>
                </div>
                <div className="contact--information--street">
                    <span className="street">{this.props.street}</span>
                    <span className="streetNumber">{this.props.streetNumber}</span>
                </div>
                <div className="contact--information--place">
                    <span className="postalcode">{this.props.postalcode}</span>
                    <span className="place">{this.props.place}</span>
                </div>
                <div className="contact--information--country">
                    <span className="country">{this.props.country}</span>
                </div>
                <div className="contact--information--forms">
                    <span className="telephone">{this.props.telephone}</span><br/>
                    <span className="telefax">{this.props.telefax}</span><br/>
                    <span className="email">{this.props.email}</span><br/>
                    <span className="homepage">{this.props.homepage}</span><br/>
                </div>
            </div>
        );
    }
}

/**
 * Next steps
 * 
 * Setting Conditions
 */

Contact.propTypes = {
    salutation: PropTypes.oneOf(["Ms.","Mrs.","Mr."]),
    title: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    streetNumber: PropTypes.string.isRequired,
    postalcode: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    country: PropTypes.string,
    telephone: PropTypes.string,
    telefax: PropTypes.string,
    email: PropTypes.string,
    homepage: PropTypes.string
}