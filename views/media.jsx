import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./includes/header.jsx";
import Footer from "./includes/footer.jsx";
import Head from "./includes/init.jsx";
import Title from "./includes/title.jsx";
import Line from "./components/line.jsx";
import Link from "./components/link.jsx";
import { Image } from "./components/image.jsx";

export default class Media extends React.Component {
    render() {
        return (
            <html>
                <Head>
                    <Title title={this.props.title} />
                </Head>
                <body>
                    <Header/>
                    <Line />
                    <div>
                        <Image images={this.props.image} />
                        <Link
                            url={this.props.url}
                            name={this.props.nameTo}
                            text={this.props.text}
                        />
                    </div>
                    <Footer />
                </body>
            </html>
        );
    }
}