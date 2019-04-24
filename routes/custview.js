const express = require('express');
const router = express.Router();
const Example = require('../db/models/exampleModel'); // 引入模型

router.get('/list', (req, res) => {
	Example.find({}, (err, data) => {
		if (err) next(err);
		res.json(data);
	});
});
module.exports = router;
