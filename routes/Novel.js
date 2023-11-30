var express = require('express');
const Novel_controlers= require('../controllers/Novel');
var router = express.Router();

const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET Novels */
router.get('/', Novel_controlers.Novel_view_all_Page );
/* GET detail Novel page */
router.get('/detail', secured, Novel_controlers.Novel_view_one_Page);
/* GET create Novel page */
router.get('/create',secured, Novel_controlers.Novel_create_Page);
/* GET update costume page */
router.get('/update', secured, Novel_controlers.Novel_update_Page);
/* GET delete Novel page */
router.get('/delete', secured, Novel_controlers.Novel_delete_Page);

module.exports = router;