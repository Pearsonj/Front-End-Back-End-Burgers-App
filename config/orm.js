var connection = require("../config/connections");

var orm = {
    selectAll: function(something ,cb){
        var queryString = "SELECT * FROM burgers;";

        connection.query(queryString, function(err, result){
            if(err){throw err;}

            cb(result);
        });
    },



    inserOne: function(tableName, vals, cb){
        console.log(vals);
        var queryString = "INSERT INTO burgers (burger_name)";
        queryString += " VALUES ('";
        queryString +=  vals;
        queryString += "');";
        console.log(queryString);

        connection.query(queryString, function(err, result){
            if(err){throw err;}

            cb(result);
        

        });
    },
    updateOne: function(tableName, condition, cb){
        var queryString = "UPDATE burgers SET devoured = true";
        queryString += " WHERE ";
        queryString +=  condition;
        
        console.log(queryString);

        connection.query(queryString, function(err, result){
            if(err){throw err;}

            cb(result);
        

        });

    }


}

module.exports = orm;