import React from 'react';
import ReactDOM from 'react-dom';

export default class Link extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <a href={this.props.url} name={this.props.name}>
                <div>{this.props.text}</div>
            </a>
        );
    }
}