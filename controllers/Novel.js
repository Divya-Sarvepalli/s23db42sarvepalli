var Novel = require('../models/Novel');
// List of all Novels
exports.Novel_list = function(req, res) {
res.send('NOT IMPLEMENTED: Novel list');
};
// for a specific Novel.
exports.Novel_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Novel detail: ' + req.params.id);
};
// Handle Novel create on POST.
exports.Novel_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Novel create POST');
};
// Handle Novel delete form on DELETE.
exports.Novel_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Novel delete DELETE ' + req.params.id);
};
// Handle Novel update form on PUT.
exports.Novel_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Novel update PUT' + req.params.id);
};