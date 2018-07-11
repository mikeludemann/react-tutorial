import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./includes/header.jsx";
import Footer from "./includes/footer.jsx";
import Head from "./includes/init.jsx";
import Title from "./includes/title.jsx";
import Line from "./components/line.jsx";
import Link from "./components/link.jsx";


import { InputWithHeadline } from "./components/input.jsx";

export default class Home extends React.Component {
    render() {
        return (
            <html>
                <Head>
                </Head>
                <body>
                    <Header>
                        <Title title={this.props.title} />
                    </Header>
                    <Line />
                    <div>
                        <form>
                            <InputWithHeadline fields={this.props.fieldElements}/>
                        </form>
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