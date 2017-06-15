/*
 * @Author: qiuziz
 * @Date: 2017-06-14 16:36:44
 * @Last Modified by: qiuziz
 * @Last Modified time: 2017-06-15 10:05:53
 */


var express = require("express"),
	router = express(),
	connect = require("../utils/db.js");

router.get("/", (req, res) => {
  connect((err, db) => {
		//连接到表 dishes
		var collection = db.collection('dishes');
		
		//查询数据库
		collection.findOne({}, {_id: 0}, function(err,doc){
			if (err) {
				console.log(err);
			  db.close();
        res.status(502).send('fetch error')
				return;
			}
			db.close();
			res.send(doc);
		})
	})
})

router.post("/", (req, res) => {
  connect((err, db) => {
		//连接到表 dishes
		var collection = db.collection('dishes');
		//查询数据库
		collection.save({_id: 1, dishes: req.body.dishes}, function(err,result){
			if (err) {
				console.log(err);
			  db.close();
        res.status(502).send('fetch error')
				return;
			}
			db.close();
			res.send(result);
		})
	})
})

module.exports = router