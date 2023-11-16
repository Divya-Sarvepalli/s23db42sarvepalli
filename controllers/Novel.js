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

    // Handle Novel delete on DELETE.
exports.Novel_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Novel.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
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

//Handle Novel delete form on DELETE.
//exports.Novel_delete = function(req, res) {
//res.send('NOT IMPLEMENTED: Novel delete DELETE ' + req.params.id);
//};

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

    // Handle a show one view with id specified by query
exports.Novel_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Novel.findById( req.query.id)
    res.render('Noveldetail',
    { title: 'Novel Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
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


    // Handle building the view for creating a Novel.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Novel_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Novelcreate', { title: 'Novel Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a Novel.
// query provides the id
exports.Novel_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Novel.findById(req.query.id)
    res.render('Novelupdate', { title: 'Novel Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
