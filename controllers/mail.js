var nodemailer = require('nodemailer');

module.exports = {
	mail: function(req, res) {

		var mailOpts, smtpTrans;
				//Setup Nodemailer transport, Create an application-specific password to avoid problems.
				smtpTrans = nodemailer.createTransport('SMTP', {
						host: 'Gmail',
						port: 587,
						auth: {
								user: "hanlonad27@gmai.com",
								pass: "Levi1427" 
						}
				});
				//Mail options
				mailOpts = {
						from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
						to: 'levi@raveninnovation.com',
						subject: 'Website contact form',
						text: req.body.message
				};
				smtpTrans.sendMail(mailOpts, function (error, response) {
						//Email not sent
						if (error) {
								res.render('contact', { title: 'Raven-Innovation', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
						}
						//Yay!! Email sent
						else {
								res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
						}
				});
	},
}