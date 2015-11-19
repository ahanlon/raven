module.exports = {
	index: function(req, res) {
	  res.render('index', {
	  	title: 'Raven-Innovations'
	  });
	},
	about: function(req, res) {
		res.render('about');
	},
	location: function(req, res) {
		res.render('location');
	},
	support: function(req, res) {
		res.render('support');
	},
	training: function(req, res) {
		res.render('training');
	},
	careers: function(req, res) {
		res.render('careers');
	}
};