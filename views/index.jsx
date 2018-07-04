import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./includes/header.jsx";
import Footer from "./includes/footer.jsx";
import Head from "./includes/init.jsx";

export default class DefaultContainer extends React.Component {
  render() {
    return (
        <html>
            <Head>
                <title>{this.props.title}</title>
            </Head>
            <body>
                <Header/>
                <div>
                    {this.props.text}
                </div>
                <Footer/>
            </body>
        </html>
    );
  }
}