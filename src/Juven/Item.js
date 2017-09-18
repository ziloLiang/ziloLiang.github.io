import React from 'react';
import ScoreList from './ScoreList';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChildren: this.props.item.showChildren
        }
    }
    componentWillMount() {

    }
    showChildren(item) {
        this.setState({
            showChildren: !this.state.showChildren
        });
    }
    render() {
        let i = this.props.index;
        let item = this.props.item;
        return (
            <li key={'juven' + i} className="table-tr clearfix">
                <div className="main-wrap" onClick={this.showChildren.bind(this, item)}>
                    <div className="index" ><span>{i + 1}</span></div>
                    <div className="head-wrap"  >
                        <span>
                            <img className="head" src={item.head} />
                        </span>
                    </div>
                    <div className="user" >
                        <span className="name">{item.name}</span>
                    </div>
                    <div className="score" >
                        {item.score}
                    </div>
                </div>
                {
                    this.state.showChildren && item.scoreList && item.scoreList.length
                    ? (<div className="children-wrap" >
                        {item.desc ? <pre className="desc">{item.desc}</pre> : null}
                        <ScoreList list={item.scoreList}/>
                        </div>) : null
                }
            </li>
        );
    }
}