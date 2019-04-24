const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//创建Schema
const ExampleSchema = new Schema({
	word: String,
	definition: String
});

module.exports = ExampleSchema;
