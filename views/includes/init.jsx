import React from 'react';
import ReactDOM from 'react-dom';

export default class Head extends React.Component {
    render() {
        return (
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <script src="script/libs/jquery.js"></script>
                <script src="script/libs/popper.js"></script>
                <script src="script/libs/bootstrap.js"></script>
                <link rel="stylesheet" type="text/css" href="styles/libs/font-awesome.css"/>
                <link rel="stylesheet" type="text/css" href="styles/libs/bootstrap.css"/>
            </head>
        );
    }
}