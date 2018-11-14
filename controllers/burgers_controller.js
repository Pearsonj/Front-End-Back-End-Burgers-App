var express = require('express');

var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers:data
        }
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/add_burgers', function(req, res){
    burger.create([
        "burger_name"
    ], [
        req.body.burgerName
    ], function(burger){
        res.json({burgerName: burger});
    });
});

router.put('/api/devour', function(req,res){
    var condition = "id = " + parseInt(req.body.id);

    console.log("condition: " + condition);

    burger.update({
        devoured: true
    }, condition, function(burger){
        if(burger.changedRows === 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
})

module.exports = router;