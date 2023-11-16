var express = require('express');
const Novel_controlers= require('../controllers/Novel');
var router = express.Router();

/* GET Novels */
router.get('/', Novel_controlers.Novel_view_all_Page );
/* GET detail Novel page */
router.get('/detail', Novel_controlers.Novel_view_one_Page);
/* GET create Novel page */
router.get('/create', Novel_controlers.Novel_create_Page);
/* GET create update page */
router.get('/update', Novel_controlers.Novel_update_Page);
/* GET delete Novel page */
router.get('/delete', Novel_controlers.Novel_delete_Page);

module.exports = router;