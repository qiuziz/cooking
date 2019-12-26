/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-10-31 20:39:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-12-26 17:57:09
 */

import React, { useState } from 'react';
import './index.scss';

interface PropsType {
	History: any;
	location: any;
	history: any;
}

const dishesList = [
	"笋丝炒肉",
	"宫保鸡丁",
	"小炒肉",
	"辣子鸡丁",
	"口水鸡（手撕鸡）",
	"可乐鸡翅",
	"糖醋排骨",
	"鲫鱼豆腐汤",
	"红烧小黄鱼",
	"蒸虾",
	"麻婆老豆腐",
	"干锅千页豆腐",
	"炒彩豆子（玉米青豆胡萝卜）",
	"炒小青菜",
	"炒莴笋",
	"炒四季豆",
	"丝瓜鸡蛋",
	"芹菜豆干",
	"炒萝卜菜",
	"炒土豆",
	"番茄鸡蛋",
	"韭黄鸡蛋",
	"蒜台鸡蛋",
	"黄瓜炒平菇",
	"炒豆芽",
	"拌黄瓜",
	"炒河粉",
	"炒乌冬面",
	"韩式拌饭",
	"酸辣米线",
	"炒年糕",
	"煎饺",
	"拌面"
];

const noRepeat = (a: number, b: number, len: number): number => {
	return a === b ? noRepeat(a, Math.floor(Math.random() * len), len) : b
}

export const Home = (props: PropsType) => {

	const createDishes = () => {
		const
			len = dishesList.length,
			a = Math.floor(Math.random() * len),
			b = noRepeat(a, Math.floor(Math.random() * len), len);
			setDish(`${dishesList[a]} ${dishesList[b]}`);
	}

	const [toDayDish, setDish] = useState('');
	
	return (
		<div className="home">
			<p className="title">Cooking</p>
			<div className="content">
				<p id="createDishes">{toDayDish || '今晚菜谱...'}</p>
				<button id="createBtn" onClick={createDishes}>生成菜谱</button>
				{/* <button id="addBtn">修改菜谱</button> */}
			</div>
			<div className="editDishes">
				<textarea id="dishesInput" cols={30} rows={10} />
				<div className="authBox">
					<label htmlFor="auth" className="authLabel">身份验证:</label>
					<input id="auth" type="text" />
					<div id="errorTips"></div>
				</div>
				<div className="footer">
					<button id="cancel">取消</button>
					<button id="save">保存</button>
				</div>
			</div>
		</div>
	);
}

