var connection = require("../config/connections");

var orm = {
    selectAll: function(something ,cb){
        var queryString = "SELECT * FROM burgers;";

        connection.query(queryString, function(err, result){
            if(err){throw err;}

            cb(result);
        });
    },

    inserOne: function(vals, cb){
        var queryString = "INSERT INTO burgers (burger_name)";
        queryString += " VALUES (";
        queryString +=  vals;
        queryString += ");";

        connection.query(queryString, function(err, result){
            if(err){throw err;}

            cb(result);
        

        });
    },
    updateOne: function(){


    }


}

module.exports = orm;