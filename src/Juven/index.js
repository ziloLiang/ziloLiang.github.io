import React from 'react';

import data from '../json/juven';

import './style.less';

export default class Juven extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="juven">
                <div className="juven-header" >
                    <img src="images/juven.jpg" />
                    <span >北京尤文赛季竞猜</span>
                </div>
                <div className="table-tr table-head clearfix">
                    <div className="index" >排名</div>
                    <div className="head-wrap"  ></div>
                    <div className="user" >
                        成员
                    </div>
                    <div className="score" >
                        赛季得分
                    </div>
                </div>
                <ul>
                    {
                        data.map((item, i) => {
                            return <li key={'juven' + i} className="table-tr clearfix">
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
                            </li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}