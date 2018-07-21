import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./includes/header.jsx";
import Footer from "./includes/footer.jsx";
import Head from "./includes/init.jsx";
import Title from "./includes/title.jsx";
import Line from "./components/line.jsx";
import ContactForm from "./components/contactForm.jsx";
import { Person } from "./components/person.jsx";
import ModalComplete from "./container/modalComplete.jsx";

export default class Contact extends React.Component {
    render() {
        return (
            <html>
                <Head>
                    <Title title={this.props.headTitle} />
                </Head>
                <body id="root">
                    <Header />
                    <Line />
                    <div>
                        <Person
                            persons={this.props.persons}
                        />
                    </div>
                    <Line />
                    <div>
                        <ContactForm
                            salutation={this.props.salutation}
                            title={this.props.title}
                            firstName={this.props.firstName}
                            secondName={this.props.secondName}
                            lastName={this.props.lastName}
                            street={this.props.street}
                            streetNumber={this.props.streetNumber}
                            postalcode={this.props.postalcode}
                            place={this.props.place}
                            country={this.props.country}
                            telephone={this.props.telephone}
                            telefax={this.props.telefax}
                            email={this.props.email}
                            homepage={this.props.homepage}
                        />
                    </div>
                    <Line />
                    <ModalComplete />
                    <Footer />
                </body>
            </html>
        );
    }
}