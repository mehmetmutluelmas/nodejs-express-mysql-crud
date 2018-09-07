const headerLogin = (req,res,next) => {
  const status = false;
  const token = req.headers['token'] || req.body.token || req.query.token;

  //console.log(token);
  
  /*
  if(token==='adfff%T+%&+asdf'){
    next();
  } else {
    res.send("please login")
  }

*/
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    next();

}

module.exports = headerLogin;