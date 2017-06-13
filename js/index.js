function Random() {
	this._init();
}

Random.prototype = {
	_init: function() {
		$.get({
			url: './dishes.json',
			success: function(res) {
				console.log(res)
			}
		})
	}
}

new Random();