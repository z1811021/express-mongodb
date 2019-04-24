const mongoose = require('mongoose');
const ExampleSchema = require('../schemas/exampleSchema');
//创建model，这个地方的user对应mongodb数据库中users的conllection。
const Example = mongoose.model('word', ExampleSchema);
module.exports = Example;
