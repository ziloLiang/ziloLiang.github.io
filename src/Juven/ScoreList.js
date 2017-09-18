import React from 'react';

export default class ScoreList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    render() {
        return (
            <div className="score-table">
                <ul className="clearfix">
                    {this.props.list.map((item, i) => {
                        var className = +item.score === 1 ? 'green': 'red';
                        return <li className="score-td clearfix" key={'score' + i}>
                            <span>{item.match}<span className={className}> {item.score}</span></span>
                        </li>;
                    })}
                </ul>
            </div>
        );
    }
}