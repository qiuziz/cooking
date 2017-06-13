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
		})
	},

	_create: function() {
		var len = this.dishesList.length,
			a = Math.floor(Math.random() * len),
			b = noRepeat(a, Math.floor(Math.random() * len)),
			dish1 = this.dishesList[a],
			dish2 = this.dishesList[b];
		$('#createDishes').text('今晚菜谱：' + dish1 + ',' + dish2);
	}
}

function noRepeat(a, b) {
	return a === b ? noRepeat(a, Math.floor(Math.random() * len)) : b
}

new Random();