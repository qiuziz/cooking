/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-10-31 20:39:25
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-11-26 18:27:41
 */

import React, { useState } from 'react';
import './index.scss';
import { Carousel } from 'antd-mobile';
import { Goods } from 'component';

interface PropsType {
	History: any;
	location: any;
	history: any;
}

const DETAIL = {
	imgList: [
		'https://img.alicdn.com/imgextra/i1/808839318/O1CN012nAcoB2Ihh51XcHnL_!!808839318.jpg_640x640q80_.webp',
		'https://img.alicdn.com/imgextra/i4/808839318/O1CN01yN9UU12Ihh58M7fP8_!!808839318.jpg_640x640q80_.webp',
		'https://img.alicdn.com/imgextra/i4/808839318/O1CN01ZnlMOY2Ihh595g5az_!!808839318.jpg_640x640q80_.webp',
		'https://img.alicdn.com/imgextra/i3/808839318/O1CN01Ssu5jo2Ihh58xaqhC_!!808839318.jpg_640x640q80_.webp',
		'https://img.alicdn.com/imgextra/i4/808839318/O1CN01YdT6BW2Ihh5BsO36z_!!808839318.jpg_640x640q80_.webp'
	],
	price: '119',
	name: '搞怪可爱表情冰箱贴卡通动漫日韩小新3D立体吸铁石磁铁磁贴装饰贴',
	freight: '免运费',
	sku: {
		tags: ['容量', '颜色分类'],
		color: [
			{
				name: '蜡笔小新1套10个冰箱贴',
				id: '1'
			}
		],
		size: [
			{
				id: '1',
				name: '100ml',
			},
			{
				id: '2',
				name: '250ml',
			},
			{
				id: '3',
				name: '300ml',
			},
		]
	},
	comment: {
		total: '287',
		commentList: [
			{
				id: '1',
				author: 'tksdas1',
				content: '多谢老板送的三只猫和6筒',
				avatar: 'https://wwc.alicdn.com/avatar/getAvatar.do?userIdStr=Xmhzv8xLX8cbP0lhOmcSPmcLOH8LPG80XFR-P8c4PGM-vFxWvFv4P0Q0MC8uPGH0&width=40&height=40&type=sns'
			}
		]
	},
	detailImgList: [
		'https://img.alicdn.com/imgextra/i2/808839318/O1CN01ckYdnt2Ihh58jUEIi_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i3/808839318/O1CN01wEvffN2Ihh56zkscD_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i3/808839318/O1CN01VkMh1p2Ihh5CNEdtY_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i4/808839318/O1CN01EnTNPR2Ihh565yWDi_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i4/808839318/O1CN01Dq1H3h2Ihh5Bd3l51_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i4/808839318/O1CN01LTvjWM2Ihh57N5Ulw_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i2/808839318/O1CN01ZDSzDI2Ihh59ugG1N_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i1/808839318/O1CN01J2CLKT2Ihh58jV6Mv_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i2/808839318/O1CN01zJHz7T2Ihh595fceg_!!808839318.jpg_640x0q80_.webp',
		'https://img.alicdn.com/imgextra/i1/808839318/O1CN011ZkbiG2Ihh5CNDR40_!!808839318.jpg_640x0q80_.webp',
		'https://gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar',
	]
};

const RECOMMEND_LIST = [
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

export const GoodsDetail = (props: PropsType) => {
	const [detail] = useState(DETAIL);
	const [recommendList] = useState(RECOMMEND_LIST);

	const { imgList, price, name, freight, sku, comment, detailImgList } = detail;
	return (
		<div className="goods-detail">
			<Carousel
				autoplay
				infinite
			>
				{imgList.map((img: any) => (
					<img key={img} src={img} alt="" />
				))}
			</Carousel>
			<div className="goods-basic-info">
				<div className="price-wrap">
					<span className="price rmb">{price}</span>
				</div>
				<div className="goods-name">
					<p>{name}</p>
				</div>
			</div>
			<div className="goods-service-info">
				<div className="list">
					<label>快递</label>
					<p>{freight}</p>
					<i className="iconfont icon-arrow" />
				</div>
				<div className="list">
					<label>规格</label>
					<p>请选择 {sku.tags.join(' ')}</p>
					<i className="iconfont icon-arrow" />
				</div>
			</div>

			<div className="comment">
				<div className="topic">
					<span className="text">商品评价({comment.total})</span>
					<span className="more">
						查看全部
						<i className="iconfont icon-arrow" />
					</span>
				</div>
				<div className="comment-box">
					{
						comment.commentList.map((comment: any) =>
							<div className="comment-wrap" key={comment.id}>
								<p className="avatar">
									<img src={comment.avatar} alt="" />
									<span className="author">{comment.author}</span>
								</p>
								<p className="content">{comment.content}</p>
							</div>
						)
					}

				</div>
			</div>
			<div className="divid-topic">详情</div>
			{
				detailImgList.map((img: any) =>
					<img src={img} key={img} alt="" />
				)
			}

			<div className="divid-topic">更多推荐</div>
			<div className="recommend-list goods-list">
				{
					recommendList.map((item: any) =>
						<Goods
							key={item.id}
							img={item.img}
							name={item.name}
							price={item.price}
						/>
					)
				}
			</div>
			<div className="settle-box">
				<div className="small-btn">
					<i className="iconfont icon-home" />
					<span>首页</span>
				</div>
				<div className="small-btn">
					<i className="iconfont icon-star" />
					<span>收藏</span>
				</div>
				<div className="small-btn">
					<i className="iconfont icon-cart" />
					<span>购物车</span>
				</div>
				<div className="btn">
					<span className="left">加入购物车</span>
					<span className="right">立即购买</span>
				</div>
			</div>
		</div>
	);
}

