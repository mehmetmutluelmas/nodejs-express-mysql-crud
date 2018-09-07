function db(sql){

  var mysql      = require('mysql');
  

    var connection = mysql.createConnection({
      host     : 'eu-cdbr-west-02.cleardb.net',
      user     : 'b99fefe04be06a',
      password : '08a08166',
      database : 'heroku_8214a42e6c66ce8'
    });


    
    
    
    const result = {
      error: '',
      results: '',
      fields: '',
    }

    connection.connect(function(error) {
      if (error) {
        //console.error('error connecting: ' + error.stack);
        result.error = error.stack;
        console.log(result);
        //reject(result);
      }
      //console.log('connected as id ' + connection.threadId);
      
    });

    
    return new Promise(function(resolve, reject) {

      connection.query(sql,param = "", function (error, results, fields) {
        if (error) {
          result.error = error;
          console.log(result);
          //reject(result);
        } else {
          result.results = results;
          result.fields = fields;
        }
        //console.log(result)
        resolve(result); 
      });


      connection.end();
    });


};




module.exports = db;

