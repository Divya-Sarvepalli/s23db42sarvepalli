var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Novel_controller = require('../controllers/Novel');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// NOVEL ROUTES ///
// POST request for creating a Novel.
router.post('/Novels', Novel_controller.Novel_create_post);
// DELETE request to delete Novel.
router.delete('/Novels/:id', Novel_controller.Novel_delete);
// PUT request to update Novel.
router.put('/Novels/:id', Novel_controller.Novel_update_put);
// GET request for one Novel.
router.get('/Novels/:id', Novel_controller.Novel_detail);
// GET request for list of all Novel items.
router.get('/Novels', Novel_controller.Novel_list);
module.exports = router;