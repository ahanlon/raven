
module.exports = {
		index: function(req, res) {
			res.render('index', {
				title: 'Raven-Innovation'
			});
		},
		about: function(req, res) {
				res.render('about', {
						title: 'About-Raven'
				});
		},
		contact: function(req, res) {

				res.render('contact', {
					title: 'Contact-Raven'
				});
		},
		services: function(req, res) {
				res.render('services', {
						title: 'Services-Raven'
				});
		},
};