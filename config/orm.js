var connection = require("../config/connections");

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers;";

        connection.query(queryString, function(err, result){
            if(err) throw err;

            cb(result);
        });
    },

    inserOne: function(){


    },
    updateOne: function(){


    }


}

module.exports = orm;