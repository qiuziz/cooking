function Random() {
	this._init();
}

Random.prototype = {
	_init: function() {
		$.get({
			url: './disher.json',
			success: function(res) {
				console.log(res)
			}
		})
	}
}

new Random();