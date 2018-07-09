import React from 'react';
import ReactDOM from 'react-dom';

const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0px'
};

export class SortingList extends React.Component {
    render() {
        return (
            <ol style={listStyle}>
                {this.props.items.map((item) => {
                    return <li 
                            key={item.id}
                            > 
                            {item.text}
                            </li>;
                })}
            </ol>
        );
    }
}

export class UnsortingList extends React.Component {
    render() {
        return (
            <ul style={listStyle}>
                {this.props.items.map((item) => {
                    return <li 
                            key={item.id}
                            > 
                            {item.text}
                            </li>;
                })}
            </ul>
        );
    }
}