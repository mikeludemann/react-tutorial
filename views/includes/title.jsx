import React from 'react';
import ReactDOM from 'react-dom';

export default class Title extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <title>
                {this.props.title}
            </title>
        );
    }
}