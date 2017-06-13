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
		var len = this.dishesList.length;
		var dish = this.dishesList[Math.floor(Math.random() * len)];
		$('#createDishes').text(dish);
	}
}

new Random();