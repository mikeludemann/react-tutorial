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

export class ModernList extends React.Component {
    render() {
        return (
            <div className="list--container">
                {this.props.items.map((item) => {
                    return <div className="list--container--item">
                        <span className="list--container--item--Number">{item.id}</span>
                        <span>.</span>
                        <span className="list--container--item--Text">{item.text}</span>
                    </div>;
                })}
            </div>
        );
    }
}