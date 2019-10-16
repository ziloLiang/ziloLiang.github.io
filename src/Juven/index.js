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
            let totel = 0 ;
            item.scoreList.forEach((s) => {
                totel += s.score;
            });
            item.score = totel;
        });
        data.sort(function (item1, item2) {
            if (item1.score > item2.score) {
                return -1;
            }
            else if (item1.score < item2.score) {
                return 1;
            }
            return 0;
        });
    }
    render() {
        return (
            <div className="juven">
                <div className="juven-header" >
                    JUVENTUS 19/20赛季
                </div>
                <div className="table-tr table-head clearfix">
                    <div className="main-wrap">
                        <div className="index" >排名</div>
                        <div className="head-wrap"  ></div>
                        <div className="user" >
                            场上运动员
                        </div>
                        <div className="score" >
                            赛季得分
                        </div>
                    </div>
                </div>
                <ul>
                    {
                        data.map((item, i) => {
                            if (item.scoreList && item.scoreList.length) {
                                return <Item item={item} index={i} />;
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}