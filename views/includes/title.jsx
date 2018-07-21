import React from 'react';
import ReactDOM from 'react-dom';

export default class Title extends React.Component {
    render() {
        return (
            <title>
                {this.props.title}
            </title>
        );
    }
}