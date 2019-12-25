/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-10-31 20:39:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-11-26 09:39:10
 */

import React, { useState } from 'react';
import './index.scss';
import { Carousel, SearchBar } from 'antd-mobile';

import NEW from './images/new.png';
import { ImageMap } from '@qiuz/react-image-map';
import { Goods } from 'component';

interface PropsType {
	History: any;
	location: any;
	history: any;
}

const ICON_LIST = [
	{
		img: 'https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=85&type=webp&imageView&thumbnail=144x144',
		title: '美肤',
	},
	{
		img: 'https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=85&type=webp&imageView&thumbnail=144x144',
		title: '美肤',
	},
	{
		img: 'https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=85&type=webp&imageView&thumbnail=144x144',
		title: '美肤',
	},
	{
		img: 'https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=85&type=webp&imageView&thumbnail=144x144',
		title: '美肤',
	},
	{
		img: 'https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=85&type=webp&imageView&thumbnail=144x144',
		title: '美肤',
	},
	{
		img: 'https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=85&type=webp&imageView&thumbnail=144x144',
		title: '美肤',
	},
	{
		img: 'https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=85&type=webp&imageView&thumbnail=144x144',
		title: '美肤',
	},
	{
		img: 'https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png?quality=85&type=webp&imageView&thumbnail=144x144',
		title: '美肤',
	},
];

const GOODS_LIST = [
	{
		id: 1,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 2,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 3,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 4,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 5,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 6,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 7,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 8,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 9,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 10,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 11,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 12,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 13,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 14,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
	{
		id: 15,
		name: '超大碗杯子早餐杯燕麦杯牛奶杯麦片杯陶瓷水杯带盖勺马克杯大容量',
		img: 'https://gw.alicdn.com/bao/uploaded/i1/36832108/O1CN018lQkv11RRVShAuFGN_!!0-item_pic.jpg_500x500q90.jpg_.webp',
		price: '32.8'
	},
]

export const Home = (props: PropsType) => {

	const [data] = useState(['1', '2', '3']);
	const [primaryIcon] = useState(ICON_LIST);
	const [goodsList] = useState(GOODS_LIST);

	return (
		<div className="home">
			<div className="search-box">
				<SearchBar className="search" placeholder="搜索商品" maxLength={8} />
			</div>
			<Carousel
				autoplay
				infinite
			>
				{data.map(val => (
					<a
						key={val}
						href="http://www.alipay.com"
						style={{ display: 'inline-block', width: '100%', }}
					>
						<img
							src={`https://yanxuan.nosdn.127.net/dac8b589005292d74c06bcc6ca4a84d8.jpg?type=webp&imageView&quality=75&thumbnail=750x0`}
							alt=""
							style={{ width: '100%', verticalAlign: 'top' }}
						/>
					</a>
				))}
			</Carousel>
			<div className="primary-icon">
				{
					primaryIcon.map((icon: any, index: number) => {
						return (
							<div className="icon-box" key={index}>
								<img src={icon.img} alt="" />
								<span>{icon.title}</span>
							</div>
						)
					})
				}
			</div>
			<div className="new-gift">
				<p className="title">-新人专享礼-</p>
				<div className="content">
					<ImageMap src={NEW} />
				</div>
			</div>
			<div className="goods-list">
				{
					goodsList.map((good: any) =>
						<Goods
							img={good.img}
							name={good.name}
							price={good.price}
						/>
					)
				}
			</div>
		</div>
	);
}

