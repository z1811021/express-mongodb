const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
	mongoose.connect(config.url_string, { useNewUrlParser: true }); //connect if locahost please fill mongodb://localhost:20710/admin
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connect err：'));
	db.once('open', callback => {
		console.log('connect MongoDB suc');
	});
	return db;
};
