var Novel = require('../models/Novel');
// List of all Novels
exports.Novel_list = async function(req, res) {
    try{
    theNovels = await Novel.find();
    res.send(theNovels);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific Novel.
//exports.Novel_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: Novel detail: ' + req.params.id);
//};

// for a specific Novel.
exports.Novel_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Novel.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
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

exports.Novel_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Novel.findById( req.params.id)
// Do updates of properties
if(req.body.Novel_type)
toUpdate.Novel_type = req.body.Novel_type;
if(req.body.size) toUpdate.size = req.body.size;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// VIEWS
// Handle a show all view
exports.Novel_view_all_Page = async function(req, res) {
    try{
    theNovels = await Novel.find();
    res.render('Novel', { title: 'Novel Search Results', results: theNovels });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// Handle Novel create on POST.
exports.Novel_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Novel();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Novel_type":"goat", "cost":12, "size":"large"}
    document.Novel_type = req.body.Novel_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
