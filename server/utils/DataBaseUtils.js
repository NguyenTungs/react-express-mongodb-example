var mongoose = require('mongoose'),
	config = require('../../etc/config.json');



exports.area = () => {
	console.log('tungns')
};

exports.setUpConnection = () => {

	mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

};