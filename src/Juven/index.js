import React from 'react';

import data from '../json/juven';

import * as scoreList from '../json/index';
import './style.less';

import ScoreList from './ScoreList';
import Item from './Item';

export default class Juven extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        data.map((item, i) => {
            if (scoreList.default[item.id]) {
                item = Object.assign(item, scoreList.default[item.id]);
            }
        });
    }
    render() {
        return (
            <div className="juven">
                <div className="juven-header" >
                    <img src="images/juven.jpg" />
                    <span >北京尤文赛季竞猜</span>
                </div>
                <div className="table-tr table-head clearfix">
                    <div className="main-wrap">
                        <div className="index" >排名</div>
                        <div className="head-wrap"  ></div>
                        <div className="user" >
                            成员
                        </div>
                        <div className="score" >
                            赛季得分
                        </div>
                    </div>
                </div>
                <ul>
                    {
                        data.map((item, i) => {
                            return <Item item={item} index={i} />;
                        })
                    }
                </ul>
            </div>
        );
    }
}