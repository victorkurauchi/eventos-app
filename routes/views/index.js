var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) {

		var participante = new Media.model({
      name: req.body.name ,
			email: req.body.email ,
			phone: req.body.phone ,

			// idFacebook : req.body. ,
			// idLinkedin : req.body. ,
			// qrcode: req.body. ,
			company: { 
				name: req.body.companyName ,
				area: req.body.companyArea ,
				site: req.body.companySite ,
				linkedin: req.body.companyLinkedin ,
				facebook: req.body.companyFacebook ,
			},
			cardNumber: req.body.cardNumber ,
			cardExpiry: req.body.cardExpiry ,
			cardCVC: req.body.cardCVC ,
			couponCode: req.body.couponCode 
    });

    participante.save(function(err) {
      if (err) {
      	console.log(err);
      	next(err);
      } else {
        next();
      }
    });
		
	});
	
	// Render the view
	view.render('index');
	
};
