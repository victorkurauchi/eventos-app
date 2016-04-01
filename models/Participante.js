var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Participante Model
 * ==========
 */

var Participante = new keystone.List('Participante');

Participante.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	phone: { type: String },

	password: { type: Types.Password, initial: true, required: true },
	idFacebook : { type: String },
	idLinkedin : { type: String },
	qrcode: {type: String },
	company: {
		name: { type: String },
		area: { type: String },
		site: { type: String },
		linkedin: { type: String },
		facebook: { type: String }
	},
	cardNumber: { type: String },
	cardExpiry: { type: String },
	cardCVC: { type: String },
	couponCode: { type :String }
});


/**
 * Relationships
 */

Participante.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

Participante.defaultColumns = 'name, email, company.name';
Participante.register();
