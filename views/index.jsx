import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./includes/header.jsx";
import Footer from "./includes/footer.jsx";
import Head from "./includes/init.jsx";
import Title from "./includes/title.jsx";
import Line from "./components/line.jsx";
import {SortingList, UnsortingList, ModernList} from "./components/list.jsx";
import Link from "./components/link.jsx";

export default class Index extends React.Component {
  render() {
    return (
        <html>
            <Head>
                <Title title={this.props.title}/>
            </Head>
            <body>
                <Header/>
                <Line/>
                <div>
                    <ModernList items={this.props.listItems}/>
                    <Link
                        url={this.props.url}
                        name={this.props.name}
                        text={this.props.text}
                    />
                </div>
                <Line/>
                <Footer/>
            </body>
        </html>
    );
  }
}