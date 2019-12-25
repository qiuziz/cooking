/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-10-31 20:39:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-11-26 18:27:41
 */

import React, { useState } from 'react';
import './index.scss';
import { Tabs } from 'antd-mobile';

interface PropsType {
	History: any;
	location: any;
	history: any;
}

const TABS = [
	{ title: '明星产品', key: 't1' },
	{ title: '热卖产品', key: 't2' },
	{ title: '肌初系列', key: 't3' },
	{ title: '彩妆系列', key: 't4' },
	{ title: '修护系列', key: 't5' },
	{ title: '续白煥采', key: 't6' },
	{ title: '新水漾', key: 't7' },
	{ title: '清透肌', key: 't8' },
	{ title: '新幻时', key: 't9' },
	{ title: '健康系列', key: 't10' },
	{ title: '尊享礼盒', key: 't11' },
	{ title: '套装组合', key: 't12' },
	{ title: '明星产品', key: 't13' },
	{ title: '热卖产品', key: 't21' },
	{ title: '肌初系列', key: 't31' },
	{ title: '彩妆系列', key: 't41' },
	{ title: '修护系列', key: 't51' },
	{ title: '续白煥采', key: 't61' },
	{ title: '新水漾', key: 't71' },
	{ title: '清透肌', key: 't81' },
	{ title: '新幻时', key: 't91' },
	{ title: '健康系列', key: 't101' },
	{ title: '尊享礼盒', key: 't111' },
	{ title: '套装组合', key: 't121' },
];

const TAB_DATA: any = {
	't1': {
		title: '洁面',
		data: [
			{
				id: '1',
				title: '希芸水様洁面膏',
				img: 'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
			},
			{
				id: '2',
				title: '希芸水様洁面膏',
				img: 'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
			},
			{
				id: '3',
				title: '希芸水様洁面膏',
				img: 'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
			},
			{
				id: '4',
				title: '希芸水様洁面膏',
				img: 'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
			},
			{
				id: '5',
				title: '希芸水様洁面膏',
				img: 'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
			},
			{
				id: '6',
				title: '希芸水様洁面膏',
				img: 'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
			},
			{
				id: '7',
				title: '希芸水様洁面膏',
				img: 'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
			},
		]
	}
}

export const Category = (props: PropsType) => {

	const [tabs] = useState(TABS);
	const [tabContent] = useState(TAB_DATA);

	return (
		<div className="category">
			<Tabs tabs={tabs}
				tabBarPosition="left"
				usePaged={false}
				swipeable={true}
				useOnPan={true}
				tabDirection="vertical"
				renderTabBar={(props: any) => <Tabs.DefaultTabBar {...props} page={200} />}
			>
				{
					tabs.map((tab: any) => {
						return (
							<div key={tab.key} className="tab-content">
								<p className="topic">{tabContent['t1'].title}</p>
								<div className="list-box">
									{
										tabContent['t1'].data.map((item: any) =>
											<div className="li" key={item.id}>
												<img src={item.img} alt=""/>
												<span>{item.title}</span>
											</div>
										)
									}
								</div>
							</div>
						)
					})
				}


			</Tabs>
		</div>
	);
}

