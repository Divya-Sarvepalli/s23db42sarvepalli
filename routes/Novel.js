var express = require('express');
const Novel_controlers= require('../controllers/Novel');
var router = express.Router();

/* GET Novels */
router.get('/', Novel_controlers.Novel_view_all_Page );

module.exports = router;