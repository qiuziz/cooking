function Random() {
	this.dishesList = [];
	this._init();
}

Random.prototype = {
	_init: function() {
		var that = this;
		$.get({
			url: './dishes.json',
			success: function(res) {
				that.dishesList = res.name;
			}
		});
		$('#createBtn').click(function() {
			that._create();
		});
		$('#addBtn').click(function() {
			that._add();
		});
	},

	_create: function() {
		var len = this.dishesList.length,
			a = Math.floor(Math.random() * len),
			b = noRepeat(a, Math.floor(Math.random() * len)),
			dish1 = this.dishesList[a],
			dish2 = this.dishesList[b];
		$('#createDishes').text('今晚菜谱：' + dish1 + ' + ' + dish2);
	},

	_add: function() {
		$('.content')[0].css({display: none});
		$('.editDishes')[0].css({display: block});
		$('#dishesInput').value(this.dishesList);
	}
}

function noRepeat(a, b) {
	return a === b ? noRepeat(a, Math.floor(Math.random() * len)) : b
}

new Random();