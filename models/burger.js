var orm = require('../config/orm');

var burger ={
    all: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    create: function(tableName, vals, cb){
        orm.inserOne('burgers', vals, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition, cb){
        orm.updateOne('burgers', condition, function(res){
            cb(res);
        });
    }
}

module.exports = burger;

