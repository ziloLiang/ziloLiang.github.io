import React from 'react';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="layout">
                {this.props.children}
            </div>
        );
    }
}