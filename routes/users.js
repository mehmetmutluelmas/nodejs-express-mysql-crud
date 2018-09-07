var express = require('express');
var router = express.Router();
var db  = require('../helper/db');

/* GET users listing. */
router.get('/', function(req, res, next) {

  (async function () {

    const data = {
      users: [],
      status: 1,
      error : ''
    };

    users = await db('select * from users, authorizations where users.authorizationsId=authorizations.authorizationsId');
    
    const _companies = companies;
    for(var i in  users.results) {
      //users.results[i]['companies']=await _companies(users.results[i].usersId);
      data.users.push(users.results[i]);
    }

    //rest status
    data.status = users.error ? 0 : 1;

    //mysql error
    data.error = users.error;

    res.json(data);
    
  })();

  async function companies(i){
    
    const data = {
      companies: [],
    };
    companies = await db(`select * from companies where usersId='${i}' `);
    
    for(const i in companies.results) {
      data.companies.push(companies.results[i]);
      //console.log(data.companies);
    };

    return data.companies;

  }

}); 


router.get('/:usersId', async function(req, res, next) {

    const data = {
      users: [],
      status: 1,
      error : ''
    };

    users = await db(`select * from users where usersId='${req.params.usersId}' `);
    
    for(var i in  users.results) {
      data.users.push(users.results[i]);
    }

    //rest status
    data.status = users.error ? 0 : 1;

    //mysql error
    data.error = users.error;

    res.json(data);



}); 
router.post('/new', async function(req, res) {


    var data = {
      status: 1,
      error : '' 
    };

    const sql = `insert into users (usersId,usersFirstName,usersLastName,usersEmail,authorizationsId) values (uuid(),'${req.body.usersFirstName}','${req.body.usersLastName}','${req.body.usersEmail}','${req.body.authorizationsId}')`;
    users = await db(sql);

    //rest status
    data.status = users.error ? 0 : 1;

    //mysql error
    data.error = users.error;


    res.json(data);


  
}); 

router.post('/update', async function(req, res) {

  

  var data = {
    status: 1,
    error : '' 
  };

  const sql = `update users set usersFirstName='${req.body.usersFirstName}',usersLastName='${req.body.usersLastName}',usersEmail='${req.body.usersEmail}', authorizationsId='${req.body.authorizationsId}'where usersId='${req.body.usersId}'`;
  users = await db(sql);

  //rest status
  data.status = users.error ? 0 : 1;

  //mysql error
  data.error = users.error;


  console.log(sql);
  res.json(data);



}); 

router.post('/delete', async function(req, res) {

  

  var data = {
    status: 1,
    error : '' 
  };

  const sql = `delete from users where usersId='${req.body.usersId}'`;
  users = await db(sql);

  //rest status
  data.status = users.error ? 0 : 1;

  //mysql error
  data.error = users.error;


  
  res.json(data);



}); 

module.exports = router; 