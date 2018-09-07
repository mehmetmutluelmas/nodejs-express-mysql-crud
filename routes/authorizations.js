var express = require('express');
var router = express.Router();
var db  = require('../helper/db');

/* GET authorizations listing. */
router.get('/', async function(req, res, next) {

    const data = {
      authorizations: [],
      status: 1,
      error : ''
    };

    const sql = 'select * from authorizations';
    authorizations = await db(sql);
    for(var i in  authorizations.results) {
      data.authorizations.push(authorizations.results[i]);
    }



    //rest status
    data.status = authorizations.error ? 0 : 1;

    //mysql error
    data.error = authorizations.error;

    console.log(sql)
 
    res.json(data);

});  


router.get('/:authorizationsId', async function(req, res, next) {

    const data = {
      authorizations: [], 
      status: 1,
      error : ''
    };

    authorizations = await db(`select * from authorizations where authorizationsId='${req.params.authorizationsId}' `);
    
    for(var i in  authorizations.results) {
      data.authorizations.push(authorizations.results[i]);
    }

    //rest status
    data.status = authorizations.error ? 0 : 1;

    //mysql error
    data.error = authorizations.error;

    res.json(data);



}); 
router.post('/new', async function(req, res) {


    var data = {
      status: 1,
      error : '' 
    };

    const sql = `insert into authorizations (authorizationsId,authorizationsName) values (uuid(),'${req.body.authorizationsName})`;
    authorizations = await db(sql);

    //rest status
    data.status = authorizations.error ? 0 : 1;

    //mysql error
    data.error = authorizations.error;


    res.json(data);


  
}); 

router.post('/update', async function(req, res) {

  

  var data = {
    status: 1,
    error : '' 
  };

  const sql = `update authorizations set authorizationsName='${req.body.authorizationsName}' where authorizationsId='${req.body.authorizationsId}'`;
  authorizations = await db(sql);

  //rest status
  data.status = authorizations.error ? 0 : 1;

  //mysql error
  data.error = authorizations.error;


  
  res.json(data);



}); 

router.post('/delete', async function(req, res) {

  

  var data = {
    status: 1,
    error : '' 
  };

  const sql = `delete from authorizations where authorizationsId='${req.body.authorizationsId}'`;
  authorizations = await db(sql);

  //rest status
  data.status = authorizations.error ? 0 : 1;

  //mysql error
  data.error = authorizations.error;


  
  res.json(data);



}); 

module.exports = router; 